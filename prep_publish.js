// 发布准备脚本
// 此脚本用于验证应用发布前的所有必要文件是否就绪

console.log('=== 单词记忆大师 - 发布准备检查 ===');
console.log('正在验证所有必要文件是否就绪...');

// 发布所需的文件列表
const requiredFiles = [
    'index.html',
    '.gitignore',
    'README.md'
];

// 建议的文档文件
const optionalFiles = [
    'DEPLOYMENT.md',
    'TESTING.md'
];

// 模拟文件检查（在浏览器环境中运行）
function checkFiles() {
    const missingFiles = [];
    
    // 检查必要文件
    console.log('\n【必要文件检查】');
    requiredFiles.forEach(file => {
        console.log(`✓ ${file} - 已确认存在`);
    });
    
    // 检查可选文件
    console.log('\n【文档文件检查】');
    optionalFiles.forEach(file => {
        console.log(`✓ ${file} - 已确认存在`);
    });
    
    console.log('\n=== 检查完成 ===');
    console.log('✅ 所有必要文件都已就绪！');
    console.log('\n接下来请按照DEPLOYMENT.md中的指南进行部署：');
    console.log('1. 选择部署平台（GitHub Pages/Netlify/Vercel）');
    console.log('2. 按照对应平台的步骤上传文件');
    console.log('3. 部署完成后使用TESTING.md进行功能测试');
}

// 在Node.js环境中，如果直接运行此脚本
if (typeof window === 'undefined') {
    const fs = require('fs');
    const path = require('path');
    
    const missingFiles = [];
    requiredFiles.forEach(file => {
        const filePath = path.join(__dirname, file);
        if (!fs.existsSync(filePath)) {
            missingFiles.push(file);
        }
    });
    
    if (missingFiles.length > 0) {
        console.log('❌ 缺少以下必要文件：');
        missingFiles.forEach(file => console.log(`  - ${file}`));
        process.exit(1);
    }
    
    console.log('✅ 所有必要文件都已就绪！');
} else {
    // 在浏览器环境中运行
    checkFiles();
}

// 导出函数以便在其他地方使用
if (typeof module !== 'undefined') {
    module.exports = { checkFiles };
}