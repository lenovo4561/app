const fs = require('fs')
const path = require('path')

const rootDir = path.resolve(__dirname, '..')
const distDir = path.join(rootDir, 'dist')
const manifestPath = path.join(rootDir, 'src', 'manifest.json')

function renamePackage() {
  try {
    if (!fs.existsSync(manifestPath)) {
      console.error('manifest.json not found')
      return
    }

    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
    const packageName = manifest.package
    const versionName = manifest.versionName || '1.0.0'

    if (!fs.existsSync(distDir)) {
      console.error('dist directory not found')
      return
    }

    const files = fs.readdirSync(distDir)
    // 查找包含包名的 rpk/rpks 文件
    const packageFiles = files.filter(
      file =>
        file.startsWith(packageName) &&
        (file.endsWith('.rpk') || file.endsWith('.rpks')) &&
        !file.includes('release.production') // 防止重复处理
    )

    if (packageFiles.length === 0) {
      console.log('No package file found to rename')
      return
    }

    packageFiles.forEach(file => {
      const ext = path.extname(file)
      // 目标格式: 包名.release.production.版本名称.后缀
      const newName = `${packageName}.release.production.${versionName}${ext}`
      const oldPath = path.join(distDir, file)
      const newPath = path.join(distDir, newName)

      // 如果目标文件已存在，先删除
      if (fs.existsSync(newPath)) {
        fs.unlinkSync(newPath)
      }

      fs.renameSync(oldPath, newPath)
      console.log(`Renamed: ${file} -> ${newName}`)
    })
  } catch (err) {
    console.error('Rename failed:', err)
  }
}

renamePackage()
