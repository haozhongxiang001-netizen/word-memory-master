#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# 记忆曲线算法测试脚本

import datetime
import json

# 格式化日期为可读字符串
def format_date(date):
    return date.strftime('%Y-%m-%d')

# 模拟单词数据和当前日期
mock_words = [
    {'id': '1', 'word': 'test1', 'translation': '测试1', 'difficulty': 0, 'reviewed_times': 0, 'next_review_date': None},
    {'id': '2', 'word': 'test2', 'translation': '测试2', 'difficulty': 0, 'reviewed_times': 0, 'next_review_date': None},
    {'id': '3', 'word': 'test3', 'translation': '测试3', 'difficulty': 0, 'reviewed_times': 0, 'next_review_date': None}
]

# 获取当前日期
current_date = datetime.datetime.now()

print('开始测试记忆曲线算法...')
print(f'当前日期: {format_date(current_date)}')

# 根据代码中的算法计算下次复习日期
def calculate_next_review_date(word, rating):
    today = datetime.datetime.now()
    
    # 复制代码中的记忆曲线算法逻辑
    if rating == 'easy':
        # 简单：根据复习次数决定间隔
        match word['reviewed_times']:
            case 0:
                next_date = today + datetime.timedelta(days=1)
            case 1:
                next_date = today + datetime.timedelta(days=2)
            case 2:
                next_date = today + datetime.timedelta(days=4)
            case 3:
                next_date = today + datetime.timedelta(days=7)
            case _:
                next_date = today + datetime.timedelta(days=15)
    else:
        # 一般或困难：当天再复习
        next_date = today
    
    return next_date

# 测试简单难度的复习间隔
def test_easy_difficulty():
    print('\n测试简单难度 (easy) 的复习间隔:')
    
    # 模拟第1次学习简单难度
    mock_word = dict(mock_words[0])
    next_date = calculate_next_review_date(mock_word, 'easy')
    print(f'第1次学习: 下次复习日期 = {format_date(next_date)}')
    
    # 模拟第2次学习简单难度
    mock_word['reviewed_times'] = 1
    mock_word['difficulty'] = 0  # easy
    next_date = calculate_next_review_date(mock_word, 'easy')
    print(f'第2次学习: 下次复习日期 = {format_date(next_date)}')
    
    # 模拟第3次学习简单难度
    mock_word['reviewed_times'] = 2
    mock_word['difficulty'] = 0
    next_date = calculate_next_review_date(mock_word, 'easy')
    print(f'第3次学习: 下次复习日期 = {format_date(next_date)}')
    
    # 模拟第4次学习简单难度
    mock_word['reviewed_times'] = 3
    mock_word['difficulty'] = 0
    next_date = calculate_next_review_date(mock_word, 'easy')
    print(f'第4次学习: 下次复习日期 = {format_date(next_date)}')
    
    # 模拟第5次学习简单难度
    mock_word['reviewed_times'] = 4
    mock_word['difficulty'] = 0
    next_date = calculate_next_review_date(mock_word, 'easy')
    print(f'第5次学习: 下次复习日期 = {format_date(next_date)}')

# 测试中等难度的复习间隔
def test_medium_difficulty():
    print('\n测试中等难度 (medium) 的复习间隔:')
    
    # 模拟第1次学习中等难度
    mock_word = dict(mock_words[1])
    next_date = calculate_next_review_date(mock_word, 'medium')
    print(f'第1次学习: 下次复习日期 = {format_date(next_date)}')
    
    # 模拟第2次学习中等难度
    mock_word['reviewed_times'] = 1
    mock_word['difficulty'] = 1  # medium
    next_date = calculate_next_review_date(mock_word, 'medium')
    print(f'第2次学习: 下次复习日期 = {format_date(next_date)}')

# 测试困难难度的复习间隔
def test_difficult_difficulty():
    print('\n测试困难难度 (difficult) 的复习间隔:')
    
    # 模拟第1次学习困难难度
    mock_word = dict(mock_words[2])
    next_date = calculate_next_review_date(mock_word, 'difficult')
    print(f'第1次学习: 下次复习日期 = {format_date(next_date)}')
    
    # 模拟第2次学习困难难度
    mock_word['reviewed_times'] = 1
    mock_word['difficulty'] = 2  # difficult
    next_date = calculate_next_review_date(mock_word, 'difficult')
    print(f'第2次学习: 下次复习日期 = {format_date(next_date)}')

# 验证复习日期排序功能
def test_review_date_sorting():
    print('\n测试复习日期排序功能:')
    
    # 创建带有不同复习日期的单词数组
    test_words = [
        {'id': '1', 'word': 'word1', 'next_review_date': (current_date + datetime.timedelta(days=2)).timestamp()},
        {'id': '2', 'word': 'word2', 'next_review_date': (current_date - datetime.timedelta(days=1)).timestamp()},
        {'id': '3', 'word': 'word3', 'next_review_date': current_date.timestamp()},
        {'id': '4', 'word': 'word4', 'next_review_date': None}
    ]
    
    # 按复习日期排序（模拟代码中的排序逻辑）
    def sort_key(word):
        # 未设置复习日期的排在最后
        if word['next_review_date'] is None:
            return float('inf')
        return word['next_review_date']
    
    sorted_words = sorted(test_words, key=sort_key)
    
    print('排序后的单词顺序:')
    for word in sorted_words:
        if word['next_review_date']:
            review_date = format_date(datetime.datetime.fromtimestamp(word['next_review_date']))
        else:
            review_date = '未设置'
        print(f'- {word["word"]}: {review_date}')

# 验证算法是否符合艾宾浩斯记忆曲线原理
def validate_ebbinghaus_principle():
    print('\n验证是否符合艾宾浩斯记忆曲线原理:')
    
    # 模拟学习一个单词多次，难度为简单
    word = dict(mock_words[0])
    intervals = []
    
    for i in range(6):  # 学习6次
        next_date = calculate_next_review_date(word, 'easy')
        today = datetime.datetime.now()
        interval = (next_date - today).days
        intervals.append(interval)
        
        # 更新学习次数
        word['reviewed_times'] = i
        
        print(f'第{i+1}次学习后，复习间隔 = {interval}天')
    
    # 检查间隔是否递增（符合记忆曲线原理）
    is_increasing = all(intervals[i] <= intervals[i+1] for i in range(len(intervals)-1))
    
    if is_increasing:
        print('✅ 复习间隔符合艾宾浩斯记忆曲线原理（间隔逐渐增大）')
    else:
        print('❌ 复习间隔不符合艾宾浩斯记忆曲线原理')

# 运行所有测试
def run_all_tests():
    test_easy_difficulty()
    test_medium_difficulty()
    test_difficult_difficulty()
    test_review_date_sorting()
    validate_ebbinghaus_principle()
    
    print('\n✅ 记忆曲线算法测试完成!')

# 执行测试
if __name__ == '__main__':
    run_all_tests()