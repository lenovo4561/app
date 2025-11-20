const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const distDir = path.resolve(__dirname, '../dist')
const tempDir = path.join(distDir, 'temp_verify_build_again')

function verifyBuild() {
  console.log('Verifying build output structure...')

  if (!fs.existsSync(distDir)) {
    console.error('Error: dist directory not found')
    return
  }

  const files = fs.readdirSync(distDir)
  const rpksFile = files.find(f => f.endsWith('.rpks') && !f.includes('temp'))

  if (!rpksFile) {
    console.error('Error: .rpks file not found in dist directory')
    return
  }

  console.log(`Found RPKS: ${rpksFile}`)
  const rpksPath = path.join(distDir, rpksFile)
  const tempRpksZip = rpksPath + '.zip'

  try {
    // Create temp dir
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir)
    }

    // Copy and rename to .zip
    fs.copyFileSync(rpksPath, tempRpksZip)

    // Extract
    console.log(`Extracting ${rpksFile}...`)
    execSync(
      `powershell -Command "Expand-Archive -Path '${tempRpksZip}' -DestinationPath '${tempDir}' -Force"`
    )

    // List contents
    console.log('\n--- Contents of Generated RPKS ---')
    const extractedFiles = fs.readdirSync(tempDir)
    let hasRpk = false
    extractedFiles.forEach(file => {
      const stats = fs.statSync(path.join(tempDir, file))
      console.log(`${file} (${(stats.size / 1024).toFixed(2)} KB)`)
      if (file.endsWith('.rpk')) {
        hasRpk = true
      }
    })
    console.log('----------------------------------\n')

    if (hasRpk) {
      console.log('✅ SUCCESS: The .rpks file contains a .rpk file.')
    } else {
      console.log('❌ FAILURE: The .rpks file DOES NOT contain a .rpk file.')
    }
  } catch (error) {
    console.error('Error verifying RPKS:', error)
  } finally {
    // Cleanup
    if (fs.existsSync(tempRpksZip)) {
      fs.unlinkSync(tempRpksZip)
    }
    if (fs.existsSync(tempDir)) {
      execSync(
        `powershell -Command "Remove-Item -Path '${tempDir}' -Recurse -Force"`
      )
    }
  }
}

verifyBuild()
