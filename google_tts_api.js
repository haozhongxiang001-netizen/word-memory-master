// Google Cloud Text-to-Speech API 集成
// 注意：这是一个模板文件，实际使用时需要配置有效的API密钥

// API配置（实际使用时请配置自己的API密钥）
const TTS_CONFIG = {
  // WARNING: 不要直接在前端代码中硬编码API密钥
  // 推荐使用环境变量或代理服务器方式
  // 如果必须在前端使用，请使用以下方式：
  // apiKey: process.env.GOOGLE_TTS_API_KEY || 'your_api_key_here',
  apiKey: 'YOUR_API_KEY_HERE', // 请替换为实际的API密钥
  // 注意：这里使用占位符，在实际部署时需要配置有效的API密钥
  // 详情请参考DEPLOYMENT.md文档
  // 对于开发环境，建议使用代理服务器转发请求
  apiEndpoint: 'https://texttospeech.googleapis.com/v1/text:synthesize',
  defaultVoice: {
    languageCode: 'en-US',
    name: 'en-US-Wavenet-C', // 高质量WaveNet语音
    ssmlGender: 'NEUTRAL'
  },
  audioConfig: {
    audioEncoding: 'MP3',
    speakingRate: 0.9,
    pitch: 0
  }
};

// 音频缓存管理
class AudioCacheManager {
  constructor() {
    this.cacheKeyPrefix = 'tts_cache_';
    this.cacheExpiry = 7 * 24 * 60 * 60 * 1000; // 7天缓存过期时间
  }

  getCacheKey(text, voiceConfig) {
    const configStr = JSON.stringify(voiceConfig);
    return `${this.cacheKeyPrefix}${btoa(text)}_${btoa(configStr)}`;
  }

  getCachedAudio(text, voiceConfig) {
    try {
      const cacheKey = this.getCacheKey(text, voiceConfig);
      const cachedData = localStorage.getItem(cacheKey);
      
      if (cachedData) {
        const parsed = JSON.parse(cachedData);
        const now = Date.now();
        
        // 检查是否过期
        if (now - parsed.timestamp < this.cacheExpiry) {
          return parsed.audioUrl;
        } else {
          // 删除过期缓存
          localStorage.removeItem(cacheKey);
        }
      }
    } catch (error) {
      console.error('获取缓存失败:', error);
    }
    
    return null;
  }

  setCachedAudio(text, voiceConfig, audioUrl) {
    try {
      const cacheKey = this.getCacheKey(text, voiceConfig);
      const cacheData = {
        audioUrl,
        timestamp: Date.now()
      };
      
      localStorage.setItem(cacheKey, JSON.stringify(cacheData));
    } catch (error) {
      console.error('设置缓存失败:', error);
    }
  }

  clearCache() {
    try {
      // 清除所有TTS缓存
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith(this.cacheKeyPrefix)) {
          localStorage.removeItem(key);
        }
      });
    } catch (error) {
      console.error('清除缓存失败:', error);
    }
  }
}

// 创建缓存管理器实例
const audioCache = new AudioCacheManager();

/**
 * 使用Google Cloud Text-to-Speech API合成语音
 * @param {string} text - 要合成的文本
 * @param {Object} options - 可选配置
 * @returns {Promise<string>} - 返回音频URL
 */
async function synthesizeSpeechWithGoogleAPI(text, options = {}) {
  // 合并默认配置和用户配置
  const voice = { ...TTS_CONFIG.defaultVoice, ...options.voice };
  const audioConfig = { ...TTS_CONFIG.audioConfig, ...options.audioConfig };
  
  // 检查缓存
  const cacheKey = audioCache.getCacheKey(text, { voice, audioConfig });
  const cachedAudio = audioCache.getCachedAudio(text, { voice, audioConfig });
  
  if (cachedAudio) {
    console.log('使用缓存的音频');
    return cachedAudio;
  }
  
  // 构建请求体
  const requestBody = {
    input: { text },
    voice,
    audioConfig
  };
  
  try {
    // 检查API密钥是否为占位符
    if (TTS_CONFIG.apiKey === 'YOUR_API_KEY_HERE') {
      const error = new Error('Google TTS API未配置: 请在DEPLOYMENT.md中查看API密钥配置指南');
      error.name = 'API_KEY_NOT_CONFIGURED';
      throw error;
    }
    
    // 发送请求到Google API
    const response = await fetch(`${TTS_CONFIG.apiEndpoint}?key=${TTS_CONFIG.apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });
    
    if (!response.ok) {
      throw new Error(`API请求失败: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    
    // 解码base64音频数据
    const audioBlob = new Blob([Uint8Array.from(atob(data.audioContent), c => c.charCodeAt(0))], {
      type: 'audio/mpeg'
    });
    
    // 创建音频URL
    const audioUrl = URL.createObjectURL(audioBlob);
    
    // 缓存音频
    audioCache.setCachedAudio(text, { voice, audioConfig }, audioUrl);
    
    return audioUrl;
  } catch (error) {
    console.error('Google TTS API错误:', error);
    // 如果是API密钥占位符错误，提供更友好的提示
    if (error.name === 'API_KEY_NOT_CONFIGURED') {
      console.warn('提示: Google TTS API未配置，将自动回退到浏览器语音合成');
    }
    throw error;
  }
}

/**
 * 播放单词发音，优先使用Google TTS，失败时回退到Web Speech API
 * @param {string} text - 要播放的文本
 * @param {Object} options - 配置选项
 */
async function playWordAudio(text, options = {}) {
  try {
    // 尝试使用Google TTS API
    const audioUrl = await synthesizeSpeechWithGoogleAPI(text, options);
    
    // 创建并播放音频
    const audio = new Audio(audioUrl);
    
    // 设置播放状态
    const playBtn = document.getElementById('playAudioBtn');
    if (playBtn) {
      playBtn.classList.add('playing');
    }
    
    audio.onended = () => {
      if (playBtn) {
        playBtn.classList.remove('playing');
      }
    };
    
    audio.onerror = (error) => {
      console.error('音频播放错误:', error);
      // 回退到Web Speech API
      fallbackToWebSpeech(text);
    };
    
    await audio.play();
    console.log('使用Google TTS API播放音频成功');
  } catch (error) {
    console.warn('Google TTS API失败，回退到Web Speech API:', error);
    // 回退到Web Speech API
    fallbackToWebSpeech(text);
  }
}

/**
 * 回退到Web Speech API播放
 * @param {string} text - 要播放的文本
 */
function fallbackToWebSpeech(text) {
  try {
    if ('speechSynthesis' in window) {
      if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
      }
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.volume = 1;
      utterance.rate = 0.9;
      utterance.pitch = 1;
      
      const playBtn = document.getElementById('playAudioBtn');
      
      utterance.onstart = () => {
        if (playBtn) {
          playBtn.classList.add('playing');
        }
      };
      
      utterance.onend = () => {
        if (playBtn) {
          playBtn.classList.remove('playing');
        }
      };
      
      utterance.onerror = (event) => {
        console.error('Web Speech API错误:', event.error);
        if (playBtn) {
          playBtn.classList.remove('playing');
        }
        showToast('播放发音失败，请稍后重试');
      };
      
      speechSynthesis.speak(utterance);
      console.log('使用Web Speech API播放音频');
    }
  } catch (error) {
    console.error('Web Speech API播放失败:', error);
    showToast('所有发音引擎均失败，请检查网络连接和浏览器设置');
  }
}

/**
 * 预加载常用单词的发音
 * @param {Array<string>} words - 单词列表
 */
async function preloadAudioForWords(words) {
  try {
    // 只预加载少量常用单词，避免过度消耗API配额
    const wordsToPreload = words.slice(0, 5); // 预加载前5个单词
    
    for (const word of wordsToPreload) {
      // 检查是否已有缓存
      const cachedAudio = audioCache.getCachedAudio(word, {
        voice: TTS_CONFIG.defaultVoice,
        audioConfig: TTS_CONFIG.audioConfig
      });
      
      if (!cachedAudio) {
        // 尝试预加载
        await synthesizeSpeechWithGoogleAPI(word);
      }
    }
    
    console.log('预加载音频完成');
  } catch (error) {
    console.warn('预加载音频失败:', error);
    // 预加载失败不影响应用正常运行
  }
}

/**
 * 更新API配置
 * @param {Object} config - 新的配置对象
 */
function updateTTSConfig(config) {
  Object.assign(TTS_CONFIG, config);
}

// 暴露到全局window对象，以便在index.html中使用
window.playWordAudio = playWordAudio;
window.synthesizeSpeechWithGoogleAPI = synthesizeSpeechWithGoogleAPI;
window.updateTTSConfig = updateTTSConfig;
window.preloadAudioForWords = preloadAudioForWords;
window.audioCache = audioCache;

// 同时保留模块导出方式
export { 
  playWordAudio, 
  synthesizeSpeechWithGoogleAPI, 
  updateTTSConfig, 
  preloadAudioForWords,
  audioCache 
};