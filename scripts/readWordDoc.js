const fs = require('fs')
const path = require('path')

/**
 * 读取Word文档并提取测评题目
 * 需要安装: npm install mammoth
 */

async function readWordDocument() {
  try {
    const mammoth = require('mammoth')
    const docPath = path.join(
      __dirname,
      '../src/assets/50道手机使用与安全相关题目及详细解析.docx'
    )

    // 读取Word文档
    const result = await mammoth.extractRawText({ path: docPath })
    const text = result.value

    console.log('=== 文档内容 ===\n')
    console.log(text)

    // 保存到文本文件方便查看
    const outputPath = path.join(__dirname, 'safety_content.txt')
    fs.writeFileSync(outputPath, text, 'utf-8')
    console.log('\n\n内容已保存到:', outputPath)

    return text
  } catch (error) {
    console.error('读取Word文档失败:', error.message)
    if (error.code === 'MODULE_NOT_FOUND') {
      console.log('\n请先安装 mammoth 包:')
      console.log('npm install mammoth')
    }
  }
}

// 执行读取
readWordDocument()
