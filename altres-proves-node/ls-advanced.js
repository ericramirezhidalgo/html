const fs = require('node:fs')
const path = require('node:path')
const picocolors = require('picocolors')

const folder = process.argv[2] ?? '.'

async function ls (folder) {
  try {
    const files = await fs.promises.readdir(folder)
    const filePromises = files.map(async (file) => {
      const filePath = path.join(folder, file)
      try {
        const stats = await fs.promises.stat(filePath)
        const isDirectory = stats.isDirectory()
        const fileType = isDirectory ? 'd' : '-'
        const fileSize = stats.size
        const fileModified = stats.mtime.toLocaleString()

        return `${fileType} ${picocolors.blue(file.padEnd(20))} ${picocolors.green(fileSize).toString().padStart(10)} ${picocolors.yellow(fileModified)}`
      } catch {
        console.error(picocolors.red(`No s'ha pogut llegir el fitxer/directori ${file}`))
        return ''
      }
    })
    const filesInfo = await Promise.all(filePromises)
    filesInfo.forEach((fileInfo) => console.log(fileInfo))
  } catch {
    console.error(`No s'ha pogut llegir el directori ${folder}`)
  }
}

ls(folder)
