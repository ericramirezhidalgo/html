import { readFile } from 'node:fs/promises'


Promise.all([
    readFile('./file.txt', 'utf-8'),
    readFile('./file2.txt', 'utf-8')
]).then(([text,secondText]) => {
    console.log('first file: ',text)
    console.log('second file: ',secondText)
})