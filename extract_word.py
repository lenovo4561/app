#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
提取Word文档内容的脚本
"""

try:
    from docx import Document
    
    # 读取Word文档
    doc = Document(r"c:\Users\Administrator\Desktop\KYY\kyy\src\assets\五大维度测试题集（20套）及打分结论.docx")
    
    # 提取所有文本
    full_text = []
    for para in doc.paragraphs:
        full_text.append(para.text)
    
    # 保存到文本文件
    with open(r"c:\Users\Administrator\Desktop\KYY\kyy\src\assets\extracted_text.txt", "w", encoding="utf-8") as f:
        f.write('\n'.join(full_text))
    
    print("提取完成！")
    
except ImportError:
    print("需要安装 python-docx 库")
    print("请运行: pip install python-docx")
except Exception as e:
    print(f"错误: {e}")
