//Async Pattern - Non Blocking approach 
const {readFileSync,writeFileSync, writeFile} = require('fs')

const {readFileSync,writeFileSync, writeFile} = require('fs')
const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')
console.log(first,second)

writeFileSync(
    './content/result-sync.txt',
    'Here is the result : '
)

console.log('Done with this task')
Console.log('Starting the next one')