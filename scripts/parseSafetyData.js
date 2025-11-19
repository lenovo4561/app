const fs = require('fs')
const path = require('path')

/**
 * 解析安全测试题目数据
 */
function parseSafetyTestData() {
  // 读取文本内容
  const contentPath = path.join(__dirname, 'safety_content.txt')
  const content = fs.readFileSync(contentPath, 'utf-8')

  const questions = []
  const lines = content.split('\n')

  let currentQuestion = null
  let currentExplanation = ''
  let isReadingExplanation = false

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()

    // 匹配题目编号 (例如: "1. 以下哪种行为...")
    const questionMatch = line.match(/^(\d+)\.\s+(.+)（\s*）$/)
    if (questionMatch) {
      // 保存上一题
      if (currentQuestion) {
        currentQuestion.explanation = currentExplanation.trim()
        questions.push(currentQuestion)
      }

      // 开始新题目
      currentQuestion = {
        id: parseInt(questionMatch[1]),
        question: questionMatch[2],
        options: [],
        correctAnswer: '',
        explanation: ''
      }
      currentExplanation = ''
      isReadingExplanation = false
      continue
    }

    // 匹配选项 (A. B. C. D.)
    const optionMatch = line.match(/^([A-D])\.\s+(.+)$/)
    if (optionMatch && currentQuestion && !isReadingExplanation) {
      currentQuestion.options.push({
        label: optionMatch[1],
        text: optionMatch[2]
      })
      continue
    }

    // 匹配答案
    if (line.startsWith('答案：') && currentQuestion) {
      currentQuestion.correctAnswer = line.replace('答案：', '').trim()
      continue
    }

    // 匹配解析
    if (line.startsWith('解析：') && currentQuestion) {
      isReadingExplanation = true
      currentExplanation = line.replace('解析：', '').trim()
      continue
    }

    // 继续读取解析内容
    if (isReadingExplanation && line && currentQuestion) {
      currentExplanation += line
    }
  }

  // 保存最后一题
  if (currentQuestion) {
    currentQuestion.explanation = currentExplanation.trim()
    questions.push(currentQuestion)
  }

  console.log(`✓ 成功解析 ${questions.length} 道安全测试题目`)
  return questions
}

/**
 * 生成安全测试数据文件
 */
function generateSafetyDataFile() {
  const questions = parseSafetyTestData()

  const fileContent = `/**
 * 手机安全知识测试题库
 * 共50道题目，每题答对得2分，答错不得分
 * 总分100分
 */

// 安全测试题目数据
export const safetyQuestions = ${JSON.stringify(questions, null, 2)}

/**
 * 获取所有安全测试题目
 */
export function getAllSafetyQuestions() {
  return safetyQuestions
}

/**
 * 根据ID获取题目
 */
export function getQuestionById(id) {
  return safetyQuestions.find(q => q.id === id)
}

/**
 * 获取题目总数
 */
export function getTotalQuestions() {
  return safetyQuestions.length
}

/**
 * 计算测试结果
 * @param {number} correctCount - 答对题目数量
 * @returns {object} 测试结果
 */
export function calculateSafetyResult(correctCount) {
  const totalQuestions = safetyQuestions.length
  const score = correctCount * 2 // 每题2分
  const percentage = (correctCount / totalQuestions) * 100

  let level = ''
  let title = ''
  let content = ''

  if (percentage >= 90) {
    level = '优秀'
    title = '手机安全专家'
    content = '你对手机使用安全知识掌握得非常全面，能够有效识别和防范各类安全风险。继续保持良好的安全习惯，并可以帮助身边的人提升手机安全意识。'
  } else if (percentage >= 80) {
    level = '良好'
    title = '手机安全达人'
    content = '你具备较强的手机安全意识，对大多数安全问题能够正确应对。建议继续学习，关注新型网络诈骗手段，进一步提升安全防护能力。'
  } else if (percentage >= 60) {
    level = '及格'
    title = '安全意识尚可'
    content = '你具备基本的手机安全知识，但在某些方面还需加强。建议多关注手机安全相关资讯，学习如何识别钓鱼链接、保护个人信息等，提升安全防护水平。'
  } else {
    level = '需提高'
    title = '安全风险较高'
    content = '你的手机安全知识还比较薄弱，容易受到网络诈骗、病毒攻击等威胁。强烈建议系统学习手机安全知识，养成良好的使用习惯，保护个人信息和财产安全。'
  }

  return {
    score,
    correctCount,
    totalQuestions,
    percentage: percentage.toFixed(1),
    level,
    title,
    content
  }
}
`

  // 写入文件
  const outputPath = path.join(__dirname, '../src/helper/safetyTestData.js')
  fs.writeFileSync(outputPath, fileContent, 'utf-8')
  console.log(`✓ 安全测试数据文件已生成: ${outputPath}`)
}

// 执行生成
try {
  generateSafetyDataFile()
  console.log('\n✓ 安全测试数据处理完成！')
} catch (error) {
  console.error('❌ 处理失败:', error)
}
