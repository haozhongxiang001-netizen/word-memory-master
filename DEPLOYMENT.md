# 部署指南

本文件提供了将单词记忆大师应用部署到不同托管平台的详细步骤。

## 准备工作

在部署前，请确保你已经：
1. 确认项目文件结构正确（包含index.html和其他必要资源）
2. 创建了.gitignore文件（已完成）
3. 更新了网站元信息（已完成）
4. 配置Google TTS API（用于发音功能，可选但推荐）

## 部署选项

### 选项1：GitHub Pages 部署

GitHub Pages是一个免费的静态网站托管服务，适合部署我们的应用。

**步骤：**

1. **创建GitHub账户**（如果还没有）
   - 访问 [GitHub.com](https://github.com) 注册账户

2. **创建新仓库**
   - 登录GitHub后，点击右上角的「+」图标，选择「New repository」
   - 仓库名称可以是 `word-memory-master` 或其他你喜欢的名称
   - 选择「Public」（公开）
   - 点击「Create repository」

### 3. 上传文件

**重要注意事项：不要上传整个文件夹，而是直接上传文件到仓库根目录！**

#### 如果你已经上传了整个文件夹（如word_memory_app），请按以下步骤修复：

**重要提示：GitHub仓库的主页面就是顶部导航栏中的「Code」标签页！**

1. **删除已上传的文件夹**：
   - 登录GitHub后，进入你的仓库（haozhongxiang001-netizen/word-memory-master）
   - 确保你在「Code」标签页（这就是仓库主页面）
   - 找到并点击word_memory_app文件夹进入
   - 在打开的文件夹页面中，点击右上角的「...」按钮（三个点的菜单）
   - 从下拉菜单中选择「Delete directory」选项
   - 在弹出的确认对话框中，输入文件夹名称「word_memory_app」进行确认
   - 点击「I understand the consequences, delete this directory」按钮完成删除

2. **正确上传文件**：
   - 删除后，点击顶部导航栏的「Code」标签页，回到仓库主页面
   - 在仓库主页面，找到并点击绿色的「Code」按钮旁边的「Add file」下拉菜单
   - 选择「Upload files」选项
   - 在你的电脑上打开word_memory_app文件夹
   - **关键操作**：不要选择整个文件夹，而是选择文件夹内的具体文件：
     - 在Mac上按住Command键，在Windows上按住Control键
     - 逐个点击选择需要上传的文件，特别是index.html（必需）、README.md和.gitignore
   - 拖放到GitHub的上传区域，或点击上传区域选择文件
   - 确保GitHub页面上的文件预览区域显示的是单个文件，而不是文件夹
   - 在页面底部的提交信息框中，添加描述性信息，例如「Upload core files to root directory」
   - 最后点击「Commit changes」按钮提交更改

3. **验证上传结果**：
   - 提交后，回到仓库主页面
   - 确认index.html文件直接显示在仓库根目录下，而不是在任何子文件夹中

#### 需要上传的核心文件：

- index.html（必需，GitHub Pages会默认加载这个文件）
- README.md
- .gitignore

**注意事项：**
- 上传额外文件（如TESTING.md、DEPLOYMENT.md等）不会导致404错误
- 关键是确保index.html文件必须位于仓库的根目录中，这是GitHub Pages正常工作的前提条件

4. **启用GitHub Pages**
   - 进入仓库的「Settings」选项卡
   - 滚动到「Pages」部分
   - 在「Source」下拉菜单中选择「main」或「master」分支
   - 点击「Save」

5. **获取部署的URL**（重要！）
   - 启用Pages后，页面会自动刷新
   - 等待几秒钟，GitHub会显示部署状态
   - 在「Pages」部分，你会看到类似这样的消息：
     *「Your site is live at https://你的用户名.github.io/你的仓库名/」*
   - 这就是你的网站URL！点击这个链接就可以访问你的应用
   - **注意**：首次部署可能需要1-2分钟才能生效，请耐心等待
   - 如果没有立即看到URL，可以刷新页面后再次查看

6. **验证部署状态**
   - 在「Actions」选项卡中，你可以查看部署进度和状态
   - 当部署完成后，状态会显示为绿色的「Success」
   - 此时你的网站已经完全可用

### 选项2：Netlify 部署

Netlify提供了简单的拖放部署功能，无需Git知识。

**步骤：**

1. **访问Netlify**
   - 前往 [Netlify.com](https://www.netlify.com)
   - 点击「Start for free」或「Sign up」创建账户

2. **拖放部署**
   - 登录后，在仪表盘上点击「Add new site」>「Deploy manually」
   - 将项目文件夹中的所有文件（index.html、.gitignore、README.md）拖拽到上传区域
   - Netlify会自动构建并部署你的网站

3. **获取部署URL**
   - 部署完成后，Netlify会提供一个随机URL（如 `your-site-name.netlify.app`）
   - 你可以通过仪表盘访问和管理这个网站

### 选项3：Vercel 部署

Vercel也提供了简单的部署选项。

**步骤：**

1. **访问Vercel**
   - 前往 [Vercel.com](https://vercel.com)
   - 创建账户或使用GitHub账户登录

2. **导入项目**
   - 登录后，在仪表盘上点击「New Project」
   - 选择「Import」>「Import Git Repository」或「Drag and drop」
   - 如果选择拖放方式，将文件拖拽到指定区域

3. **部署项目**
   - 确认项目配置（通常不需要更改）
   - 点击「Deploy」
   - 部署完成后，Vercel会提供一个URL（如 `your-site.vercel.app`）

## Google TTS API 配置指南

为了提供高质量的发音功能，应用集成了Google Cloud Text-to-Speech API。以下是配置指南：

### 获取Google Cloud API密钥

1. **创建Google Cloud账户**
   - 访问 [Google Cloud Console](https://console.cloud.google.com/)
   - 使用Google账户登录或创建新账户
   - 完成免费试用或结算信息设置

2. **创建新项目**
   - 在Cloud Console中，点击顶部的项目选择器
   - 点击「新建项目」
   - 输入项目名称（如「Word-Memory-Master」）
   - 点击「创建」

3. **启用Text-to-Speech API**
   - 在左侧导航栏中，点击「API和服务」>「库」
   - 在搜索框中输入「Text-to-Speech」
   - 选择「Cloud Text-to-Speech API」并点击「启用」

4. **创建API密钥**
   - 在左侧导航栏中，点击「API和服务」>「凭据」
   - 点击「创建凭据」>「API密钥」
   - 复制生成的API密钥（请妥善保管）
   - （可选但推荐）点击「限制密钥」设置使用限制

### API密钥安全管理

**重要：绝不要将API密钥硬编码在前端代码中！**

推荐的安全方案：

1. **使用代理服务器转发请求**
   - 部署一个简单的后端服务作为API代理
   - 后端服务存储API密钥并转发请求到Google API
   - 前端只与代理服务通信

   示例Node.js代理服务器：
   ```javascript
   const express = require('express');
   const axios = require('axios');
   const cors = require('cors');
   require('dotenv').config();

   const app = express();
   app.use(express.json());
   app.use(cors());

   // 代理Google TTS API请求
   app.post('/api/google-tts', async (req, res) => {
     try {
       const { text, voiceName, speakingRate, pitch } = req.body;
       const response = await axios.post(
         'https://texttospeech.googleapis.com/v1/text:synthesize',
         {
           input: { text },
           voice: { languageCode: 'en-US', name: voiceName || 'en-US-Wavenet-C' },
           audioConfig: {
             audioEncoding: 'MP3',
             speakingRate: parseFloat(speakingRate || 0.9),
             pitch: parseFloat(pitch || 0)
           }
         },
         {
           headers: {
             'Authorization': `Bearer ${process.env.GOOGLE_API_KEY}`
           }
         }
       );
       res.json(response.data);
     } catch (error) {
       console.error('TTS API Error:', error.message);
       res.status(500).json({ error: error.message });
     }
   });

   const PORT = process.env.PORT || 3001;
   app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));
   ```

2. **环境变量配置**
   - 在代理服务器上，使用环境变量存储API密钥
   - 创建`.env`文件：
     ```
     GOOGLE_API_KEY=your_actual_api_key_here
     ```
   - 确保`.env`文件已添加到`.gitignore`中

### 本地开发配置

1. **修改google_tts_api.js中的API端点**
   - 将`GOOGLE_TTS_API_ENDPOINT`设置为代理服务器地址
   - 例如：`const GOOGLE_TTS_API_ENDPOINT = 'http://localhost:3001/api/google-tts';`

2. **临时开发方案**（仅用于测试）
   - 对于本地开发，可以暂时将API密钥设置为常量
   - 在`google_tts_api.js`中：
     ```javascript
     const API_KEY = 'your_api_key'; // 仅用于本地开发！
     const GOOGLE_TTS_API_ENDPOINT = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${API_KEY}`;
     ```
   - **警告：不要提交包含API密钥的代码！**

### 部署环境配置

1. **在托管平台设置环境变量**
   - **Netlify**: 在「Site settings」>「Build & deploy」>「Environment」中添加
   - **Vercel**: 在「Project Settings」>「Environment Variables」中添加
   - **Heroku**: 在「Settings」>「Config Vars」中添加

2. **代理服务器部署选项**
   - **Vercel Serverless Functions**: 最简单的选项
   - **Heroku**: 适合小型应用
   - **Google Cloud Functions**: 与Google API集成最佳

### API配额和计费

1. **免费额度**
   - Google Cloud Text-to-Speech提供每月100万个字符的免费额度
   - 详细信息请查看[Google Cloud Pricing](https://cloud.google.com/text-to-speech/pricing)

2. **监控使用情况**
   - 在Google Cloud Console中，定期检查API使用情况
   - 设置预算提醒以避免意外费用

### 降级处理

如果Google TTS API不可用，应用将自动回退到浏览器的Web Speech API。确保：

1. 测试Web Speech API的兼容性
2. 向用户显示适当的错误提示
3. 提供手动切换发音引擎的选项（在应用设置中）

## 部署后验证

部署完成后，请检查以下事项：

### 移动设备音频播放注意事项

**重要提示：在移动设备上使用音频功能时可能会遇到限制！**

**问题描述**：
- 在iOS和Android设备上，点击播放按钮可能没有声音输出
- 这不是应用程序的错误，而是移动浏览器的安全限制

**技术原因**：
- 移动浏览器（特别是iOS Safari）出于用户体验和电池寿命考虑，实施了严格的音频自动播放策略
- Web Speech API（语音合成）在移动设备上**必须由明确的用户交互触发**
- 自动发音功能在移动设备上可能受限

**解决方案**：
1. **首次使用时的交互要求**：
   - 用户必须先与页面进行交互（如点击播放按钮）才能启用语音合成功能
   - 在某些设备上，可能需要点击页面上的任意位置来激活音频上下文

2. **浏览器兼容性**：
   - 推荐使用Chrome或Firefox移动版以获得最佳体验
   - iOS Safari对Web Speech API的支持相对有限

3. **用户体验优化**：
   - 确保在用户第一次点击播放按钮时，应用程序已准备好处理语音合成
   - 考虑添加视觉反馈，指示音频是否正在播放

4. **备用方案**（如上述方法无效）：
   - 可以考虑将单词发音预录制为音频文件
   - 使用<audio>标签替代Web Speech API来播放预录制的音频

**测试方法**：
- 在移动设备上打开应用后，先点击页面任意位置，然后再尝试点击播放按钮
- 如果仍然没有声音，请尝试使用不同的浏览器或刷新页面后重试

## 详细故障排除指南

如果您遇到GitHub Pages 404错误，请按照以下步骤逐步排查：

### 1. 验证文件上传状态

**操作步骤**：
- 访问您的GitHub仓库主页
- 检查是否可以看到 `index.html` 文件在根目录下
- **关键验证点**：文件必须显示为 `index.html`（小写）
- 如果文件缺失，请重新上传

### 2. 精确配置GitHub Pages

**详细配置步骤**：
- 进入仓库的「Settings」→「Pages」
- **重要配置区域**：
  - 确保「Source」选择的是「Deploy from a branch」
  - 在「Branch」部分：
    - 第一个下拉菜单必须显示为「main」或「master」
    - **第二个下拉菜单（关键！）**必须显示为「/(root)」而不是「/docs」
    - 确保两个下拉菜单都配置正确
  - 点击「Save」按钮（即使看起来已经保存过也要再次点击）
  
**预期结果**：
- 页面会刷新，并显示绿色提示消息
- 等待1-2分钟，然后再次刷新页面
- 您应该能看到类似这样的消息：「Your site is published at https://用户名.github.io/仓库名/」

### 3. 检查部署工作流状态

- 点击仓库顶部的「Actions」选项卡
- 查找最新的「pages build and deployment」工作流
- 状态必须显示为绿色的「Success」
- 如果显示为黄色或红色，说明部署失败
- 点击工作流查看详细日志，寻找错误信息

### 4. 验证文件内容和格式

- 点击仓库中的 `index.html` 文件
- 点击「Raw」按钮查看原始内容
- 确认文件不是空的，且包含有效的HTML代码
- 确保文件第一行是 `<!DOCTYPE html>`

### 5. 清除缓存并尝试不同浏览器

- 清除当前浏览器缓存
- 尝试使用隐私模式访问网站
- 或者尝试使用完全不同的浏览器

### 6. 重置部署

如果上述步骤都无法解决问题，可以尝试重置部署流程：

1. 进入仓库的「Settings」→「Pages」
2. 在「Build and deployment」部分，点击「Source」下拉菜单
3. 选择「Deploy from a branch」选项（如果当前已经选中，先选择「GitHub Actions」，保存后再切换回来）
4. 确保在Branch选项中选择正确的分支（通常是main）和文件夹位置（必须选择/(root)而不是/docs）
5. 点击「Save」重新开始部署

### 7. 最后手段：重新创建仓库

如果上述所有步骤都失败，可以尝试：
1. 创建一个全新的仓库
2. 只上传核心文件：`index.html`、`.gitignore`、`README.md`
3. 立即配置GitHub Pages，确保选择「/(root)」文件夹
4. 等待部署完成后再访问
1. **访问网站** - 使用提供的URL访问你的网站
2. **检查功能** - 确认所有功能正常工作：
   - 单词卡片翻转功能
   - 添加/编辑单词功能
   - 批量导入单词功能（包括音标和例句）
   - 发音功能
   - 学习统计图表
3. **响应式设计** - 在不同设备上测试（手机、平板、电脑）

## 自定义域名（可选）

如果你想使用自己的域名，可以在各平台的设置中配置自定义域名：

- **GitHub Pages**: 在仓库设置的「Pages」部分，点击「Custom domain」添加
- **Netlify**: 在网站设置的「Domain management」中添加
- **Vercel**: 在项目设置的「Domains」中添加

配置自定义域名通常需要在你的域名注册商处设置DNS记录。