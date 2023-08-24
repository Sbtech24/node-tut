const path = require('path')
//Path.seprrate method to seprate path 
console.log(path.sep) 

//Path.join method - returns a normalized seprating path 

const filePath = path.join('/content','subfolder','text.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

//Abosolute path 
const absolute = path.resolve(__dirname,'content','subfolder','text.txt')
console.log(absolute )