# 部署指南

本文件提供了将单词记忆大师应用部署到不同托管平台的详细步骤。

## 准备工作

在部署前，请确保你已经：
1. 确认项目文件结构正确（包含index.html和其他必要资源）
2. 创建了.gitignore文件（已完成）
3. 更新了网站元信息（已完成）

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

3. **上传文件**
   - 在仓库页面，点击「Add file」按钮，选择「Upload files」
   - 将以下文件拖拽到上传区域或点击选择文件：
     - `index.html`
     - `.gitignore`
     - `README.md`
   - 滚动到底部，添加提交信息（如「Initial commit」）
   - 点击「Commit changes」

4. **启用GitHub Pages**
   - 进入仓库的「Settings」选项卡
   - 滚动到「Pages」部分
   - 在「Source」下拉菜单中选择「main」或「master」分支
   - 点击「Save」
   - 页面会刷新，显示部署的URL（通常在几分钟内生效）

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

## 部署后验证

部署完成后，请检查以下事项：

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