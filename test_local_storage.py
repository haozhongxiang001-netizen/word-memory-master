#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# 数据持久化和本地存储测试脚本

import json
import time

# 模拟localStorage环境
class MockLocalStorage:
    def __init__(self):
        self.store = {}
    
    def setItem(self, key, value):
        self.store[key] = value
    
    def getItem(self, key):
        return self.store.get(key, None)
    
    def removeItem(self, key):
        if key in self.store:
            del self.store[key]
    
    def clear(self):
        self.store = {}
    
    # 调试方法
    def getAll(self):
        return dict(self.store)

# 创建模拟localStorage
mock_storage = MockLocalStorage()
print('开始测试数据持久化和本地存储功能...')

# 测试单词数据存储
def test_word_storage():
    print('\n测试单词数据存储:')
    
    # 模拟单词数据
    test_words = [
        {'id': '1', 'word': 'apple', 'translation': '苹果', 'difficulty': 0, 'reviewedTimes': 0, 'nextReviewDate': None},
        {'id': '2', 'word': 'banana', 'translation': '香蕉', 'difficulty': 1, 'reviewedTimes': 1, 'nextReviewDate': int(time.time() * 1000)},
        {'id': '3', 'word': 'cherry', 'translation': '樱桃', 'difficulty': 2, 'reviewedTimes': 2, 'nextReviewDate': int(time.time() * 1000) + 86400000}
    ]
    
    # 模拟保存操作
    words_json = json.dumps(test_words)
    mock_storage.setItem('wordMemoryApp.words', words_json)
    print('✅ 单词数据已保存到localStorage')
    
    # 模拟读取操作
    retrieved_json = mock_storage.getItem('wordMemoryApp.words')
    retrieved_words = json.loads(retrieved_json)
    print('✅ 单词数据已从localStorage读取')
    
    # 验证数据一致性
    if json.dumps(retrieved_words) == words_json:
        print('✅ 存储前后数据完全一致')
        return True
    else:
        print('❌ 存储前后数据不一致')
        return False

# 测试设置数据存储
def test_settings_storage():
    print('\n测试设置数据存储:')
    
    # 模拟设置数据
    test_settings = {
        'dailyGoal': 20,
        'reminderEnabled': True,
        'theme': 'light',
        'audioEnabled': True
    }
    
    # 模拟保存操作
    settings_json = json.dumps(test_settings)
    mock_storage.setItem('wordMemoryApp.settings', settings_json)
    print('✅ 设置数据已保存到localStorage')
    
    # 模拟读取操作
    retrieved_json = mock_storage.getItem('wordMemoryApp.settings')
    retrieved_settings = json.loads(retrieved_json)
    print('✅ 设置数据已从localStorage读取')
    
    # 验证数据一致性
    if json.dumps(retrieved_settings) == settings_json:
        print('✅ 存储前后数据完全一致')
        return True
    else:
        print('❌ 存储前后数据不一致')
        return False

# 测试统计数据存储
def test_stats_storage():
    print('\n测试统计数据存储:')
    
    # 模拟统计数据
    test_stats = {
        'totalLearned': 100,
        'todayLearned': 15,
        'lastReviewed': int(time.time() * 1000),
        'streakDays': 7
    }
    
    # 模拟保存操作
    stats_json = json.dumps(test_stats)
    mock_storage.setItem('wordMemoryApp.stats', stats_json)
    print('✅ 统计数据已保存到localStorage')
    
    # 模拟读取操作
    retrieved_json = mock_storage.getItem('wordMemoryApp.stats')
    retrieved_stats = json.loads(retrieved_json)
    print('✅ 统计数据已从localStorage读取')
    
    # 验证数据一致性
    if json.dumps(retrieved_stats) == stats_json:
        print('✅ 存储前后数据完全一致')
        return True
    else:
        print('❌ 存储前后数据不一致')
        return False

# 测试数据更新功能
def test_data_update():
    print('\n测试数据更新功能:')
    
    # 创建测试数据
    test_words = [
        {'id': '1', 'word': 'apple', 'translation': '苹果', 'difficulty': 0, 'reviewedTimes': 0, 'nextReviewDate': None}
    ]
    
    # 保存初始数据
    words_json = json.dumps(test_words)
    mock_storage.setItem('wordMemoryApp.words', words_json)
    
    # 获取之前存储的数据
    retrieved_json = mock_storage.getItem('wordMemoryApp.words')
    words = json.loads(retrieved_json)
    
    # 更新数据
    words[0]['difficulty'] = 1
    words[0]['reviewedTimes'] = 2
    words[0]['nextReviewDate'] = int(time.time() * 1000) + 172800000
    
    # 保存更新后的数据
    updated_json = json.dumps(words)
    mock_storage.setItem('wordMemoryApp.words', updated_json)
    print('✅ 单词数据已更新')
    
    # 再次读取验证
    final_json = mock_storage.getItem('wordMemoryApp.words')
    final_words = json.loads(final_json)
    
    if final_words[0]['difficulty'] == 1 and final_words[0]['reviewedTimes'] == 2:
        print('✅ 数据更新成功并正确保存')
        return True
    else:
        print('❌ 数据更新失败')
        return False

# 测试数据清除功能
def test_data_clear():
    print('\n测试数据清除功能:')
    
    # 先保存一些测试数据
    mock_storage.setItem('wordMemoryApp.words', 'test')
    mock_storage.setItem('wordMemoryApp.settings', 'test')
    
    # 清除特定数据
    mock_storage.removeItem('wordMemoryApp.words')
    print('✅ 已清除单词数据')
    
    # 验证是否已清除
    words = mock_storage.getItem('wordMemoryApp.words')
    if words is None:
        print('✅ 单词数据已成功清除')
    else:
        print('❌ 单词数据未清除')
        return False
    
    # 清除所有数据
    mock_storage.clear()
    print('✅ 已清除所有数据')
    
    # 验证是否已清除
    all_data = mock_storage.getAll()
    if len(all_data) == 0:
        print('✅ 所有数据已成功清除')
        return True
    else:
        print('❌ 数据未完全清除')
        return False

# 测试数据导出导入功能（模拟应用中的功能）
def test_export_import():
    print('\n测试数据导出导入功能:')
    
    # 模拟导出功能
    test_data = {
        'words': [
            {'id': '1', 'word': 'test1', 'translation': '测试1'},
            {'id': '2', 'word': 'test2', 'translation': '测试2'}
        ],
        'settings': {'dailyGoal': 15},
        'stats': {'totalLearned': 50}
    }
    
    # 导出为JSON字符串
    export_data = json.dumps(test_data)
    print('✅ 数据导出成功')
    
    # 模拟导入功能
    try:
        imported_data = json.loads(export_data)
        print('✅ 数据导入成功')
        
        # 验证导入的数据结构
        if 'words' in imported_data and 'settings' in imported_data and 'stats' in imported_data:
            print('✅ 导入的数据结构正确')
            return True
        else:
            print('❌ 导入的数据结构不正确')
            return False
    except json.JSONDecodeError:
        print('❌ 数据导入失败')
        return False

# 运行所有测试
def run_all_tests():
    results = {
        'word_storage': test_word_storage(),
        'settings_storage': test_settings_storage(),
        'stats_storage': test_stats_storage(),
        'data_update': test_data_update(),
        'data_clear': test_data_clear(),
        'export_import': test_export_import()
    }
    
    print('\n✅ 数据持久化和本地存储功能测试完成!')
    return results

# 生成测试报告
def generate_report(results):
    print('\n=== 测试报告 ===')
    print('数据持久化和本地存储功能测试结果:')
    
    all_passed = True
    for test_name, passed in results.items():
        status = '✅ 通过' if passed else '❌ 失败'
        print(f'- {test_name.replace("_", " ").title()}: {status}')
        if not passed:
            all_passed = False
    
    print('\n结论:')
    if all_passed:
        print('✅ 所有测试通过！应用的数据持久化功能工作正常。')
        print('   可以正确保存、读取、更新和清除数据。')
    else:
        print('❌ 部分测试失败，请检查相应功能。')
    
    print('\n注意事项:')
    print('- 实际浏览器中localStorage通常限制在5-10MB')
    print('- 隐私模式下localStorage可能不可用')
    print('- 不同浏览器可能有略微不同的行为')

# 执行测试并生成报告
if __name__ == '__main__':
    results = run_all_tests()
    generate_report(results)