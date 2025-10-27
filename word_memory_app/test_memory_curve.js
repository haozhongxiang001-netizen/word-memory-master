// 记忆曲线算法测试脚本

// 模拟单词数据和当前日期
const mockWords = [
    { id: '1', word: 'test1', translation: '测试1', difficulty: 0, reviewedTimes: 0, nextReviewDate: null },
    { id: '2', word: 'test2', translation: '测试2', difficulty: 0, reviewedTimes: 0, nextReviewDate: null },
    { id: '3', word: 'test3', translation: '测试3', difficulty: 0, reviewedTimes: 0, nextReviewDate: null }
];

// 模拟当前日期
const currentDate = new Date();

// 模拟艾宾浩斯记忆曲线算法测试
console.log('开始测试记忆曲线算法...');
console.log(`当前日期: ${formatDate(currentDate)}`);

// 测试简单难度的复习间隔
function testEasyDifficulty() {
    console.log('\n测试简单难度 (easy) 的复习间隔:');
    
    // 模拟第1次学习简单难度
    let mockWord = { ...mockWords[0] };
    let nextDate = calculateNextReviewDate(mockWord, 'easy');
    console.log(`第1次学习: 下次复习日期 = ${formatDate(nextDate)}`);
    
    // 模拟第2次学习简单难度
    mockWord.reviewedTimes = 1;
    mockWord.difficulty = 0; // easy
    nextDate = calculateNextReviewDate(mockWord, 'easy');
    console.log(`第2次学习: 下次复习日期 = ${formatDate(nextDate)}`);
    
    // 模拟第3次学习简单难度
    mockWord.reviewedTimes = 2;
    mockWord.difficulty = 0;
    nextDate = calculateNextReviewDate(mockWord, 'easy');
    console.log(`第3次学习: 下次复习日期 = ${formatDate(nextDate)}`);
    
    // 模拟第4次学习简单难度
    mockWord.reviewedTimes = 3;
    mockWord.difficulty = 0;
    nextDate = calculateNextReviewDate(mockWord, 'easy');
    console.log(`第4次学习: 下次复习日期 = ${formatDate(nextDate)}`);
    
    // 模拟第5次学习简单难度
    mockWord.reviewedTimes = 4;
    mockWord.difficulty = 0;
    nextDate = calculateNextReviewDate(mockWord, 'easy');
    console.log(`第5次学习: 下次复习日期 = ${formatDate(nextDate)}`);
}

// 测试中等难度的复习间隔
function testMediumDifficulty() {
    console.log('\n测试中等难度 (medium) 的复习间隔:');
    
    // 模拟第1次学习中等难度
    let mockWord = { ...mockWords[1] };
    let nextDate = calculateNextReviewDate(mockWord, 'medium');
    console.log(`第1次学习: 下次复习日期 = ${formatDate(nextDate)}`);
    
    // 模拟第2次学习中等难度
    mockWord.reviewedTimes = 1;
    mockWord.difficulty = 1; // medium
    nextDate = calculateNextReviewDate(mockWord, 'medium');
    console.log(`第2次学习: 下次复习日期 = ${formatDate(nextDate)}`);
}

// 测试困难难度的复习间隔
function testDifficultDifficulty() {
    console.log('\n测试困难难度 (difficult) 的复习间隔:');
    
    // 模拟第1次学习困难难度
    let mockWord = { ...mockWords[2] };
    let nextDate = calculateNextReviewDate(mockWord, 'difficult');
    console.log(`第1次学习: 下次复习日期 = ${formatDate(nextDate)}`);
    
    // 模拟第2次学习困难难度
    mockWord.reviewedTimes = 1;
    mockWord.difficulty = 2; // difficult
    nextDate = calculateNextReviewDate(mockWord, 'difficult');
    console.log(`第2次学习: 下次复习日期 = ${formatDate(nextDate)}`);
}

// 根据代码中的算法计算下次复习日期
function calculateNextReviewDate(word, rating) {
    const today = new Date();
    const nextDate = new Date(today);
    
    // 复制代码中的记忆曲线算法逻辑
    if (rating === 'easy') {
        // 简单：根据复习次数决定间隔
        switch (word.reviewedTimes) {
            case 0:
                nextDate.setDate(today.getDate() + 1);
                break;
            case 1:
                nextDate.setDate(today.getDate() + 2);
                break;
            case 2:
                nextDate.setDate(today.getDate() + 4);
                break;
            case 3:
                nextDate.setDate(today.getDate() + 7);
                break;
            default:
                nextDate.setDate(today.getDate() + 15);
                break;
        }
    } else {
        // 一般或困难：当天再复习
        nextDate.setDate(today.getDate());
    }
    
    return nextDate;
}

// 格式化日期为可读字符串
function formatDate(date) {
    return date.toLocaleDateString('zh-CN');
}

// 验证复习日期排序功能
function testReviewDateSorting() {
    console.log('\n测试复习日期排序功能:');
    
    // 创建带有不同复习日期的单词数组
    const testWords = [
        { id: '1', word: 'word1', nextReviewDate: new Date().setDate(currentDate.getDate() + 2) },
        { id: '2', word: 'word2', nextReviewDate: new Date().setDate(currentDate.getDate() - 1) },
        { id: '3', word: 'word3', nextReviewDate: new Date().setDate(currentDate.getDate()) },
        { id: '4', word: 'word4', nextReviewDate: null }
    ];
    
    // 按复习日期排序（模拟代码中的排序逻辑）
    testWords.sort((a, b) => {
        // 未设置复习日期的排在最后
        if (!a.nextReviewDate && !b.nextReviewDate) return 0;
        if (!a.nextReviewDate) return 1;
        if (!b.nextReviewDate) return -1;
        
        // 按复习日期升序排序
        return a.nextReviewDate - b.nextReviewDate;
    });
    
    console.log('排序后的单词顺序:');
    testWords.forEach(word => {
        const reviewDate = word.nextReviewDate ? formatDate(new Date(word.nextReviewDate)) : '未设置';
        console.log(`- ${word.word}: ${reviewDate}`);
    });
}

// 运行所有测试
function runAllTests() {
    testEasyDifficulty();
    testMediumDifficulty();
    testDifficultDifficulty();
    testReviewDateSorting();
    
    console.log('\n✅ 记忆曲线算法测试完成!');
}

// 执行测试
runAllTests();