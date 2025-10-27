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

## 部署后验证

部署完成后，请检查以下事项：

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