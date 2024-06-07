const fs = require('node:fs')

fs.readdir('.', (err, files) => {
  if (err) {
    console.error('Error al llegir el directori', err)
  }
  files.forEach(file => {
    console.log(file)
  })
})
