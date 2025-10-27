// 卡片翻转功能测试脚本

// 等待页面加载完成
document.addEventListener('DOMContentLoaded', function() {
    console.log('开始测试卡片翻转功能...');
    
    // 模拟点击学习按钮开始学习
    setTimeout(function() {
        const learnButton = document.getElementById('navLearnBtn');
        if (learnButton) {
            console.log('点击学习按钮开始学习...');
            learnButton.click();
            
            // 等待单词卡片加载
            setTimeout(function() {
                testCardFlip();
                testAudioPlay();
                testDifficultyButtons();
            }, 1000);
        }
    }, 1000);
});

// 测试卡片翻转功能
function testCardFlip() {
    const wordCard = document.getElementById('wordCard');
    if (!wordCard) {
        console.error('单词卡片元素未找到');
        return;
    }
    
    console.log('测试卡片翻转功能...');
    
    // 检查初始状态
    if (!wordCard.classList.contains('flipped')) {
        console.log('初始状态：卡片正面朝上');
    }
    
    // 模拟第一次点击翻转卡片
    setTimeout(function() {
        wordCard.click();
        console.log('点击卡片，应该翻转到背面');
        
        // 检查翻转后的状态
        setTimeout(function() {
            if (wordCard.classList.contains('flipped')) {
                console.log('✅ 卡片成功翻转到背面');
            } else {
                console.error('❌ 卡片未能翻转到背面');
            }
            
            // 模拟第二次点击翻转回来
            setTimeout(function() {
                wordCard.click();
                console.log('点击卡片，应该翻转回正面');
                
                // 检查再次翻转后的状态
                setTimeout(function() {
                    if (!wordCard.classList.contains('flipped')) {
                        console.log('✅ 卡片成功翻转回正面');
                        console.log('✅ 卡片翻转功能测试通过');
                    } else {
                        console.error('❌ 卡片未能翻转回正面');
                    }
                }, 500);
            }, 1000);
        }, 500);
    }, 1000);
}

// 测试音频播放功能
function testAudioPlay() {
    const playAudioBtn = document.getElementById('playAudioBtn');
    if (!playAudioBtn) {
        console.error('音频播放按钮未找到');
        return;
    }
    
    console.log('测试音频播放功能...');
    
    // 检查浏览器是否支持语音合成
    if ('speechSynthesis' in window) {
        console.log('浏览器支持语音合成API');
        
        // 模拟点击播放按钮
        setTimeout(function() {
            console.log('点击音频播放按钮');
            playAudioBtn.click();
            console.log('✅ 音频播放功能测试完成');
        }, 500);
    } else {
        console.log('浏览器不支持语音合成API');
    }
}

// 测试难度按钮功能
function testDifficultyButtons() {
    const easyBtn = document.getElementById('easyBtn');
    const mediumBtn = document.getElementById('mediumBtn');
    const difficultBtn = document.getElementById('difficultBtn');
    
    console.log('测试难度按钮功能...');
    
    if (!easyBtn || !mediumBtn || !difficultBtn) {
        console.error('难度按钮元素未找到');
        return;
    }
    
    // 这里我们不会实际点击难度按钮，因为这会改变应用状态
    console.log('✅ 难度按钮元素存在');
    console.log('✅ 交互体验测试完成');
}