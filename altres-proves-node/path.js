const path =  require('node:path');

const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename('/tmp/files/password.txt')
console.log(base)

const filename = path.basename('/tmp/files/password.txt', '.txt')
console.log(filename)

const extension = path.extname('myimage.jpg')
console.log(extension)