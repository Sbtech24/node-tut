//fs Filesystem  
//two flavors -Async and sync 
const {readFileSync,writeFileSync, writeFile} = require('fs')

const {readFileSync,writeFileSync, writeFile} = require('fs')
const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')
console.log(first,second)

writeFileSync('./content/result-sync.txt',`Here is the result: ${first}, ${second} ,`)
readFileSync('./content/first.txt','utf-8', (err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const second = result
    writeFile(
        './content/result-async.yxt',
        `Here is the result ${first} , ${second}`
    ,(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        console.log(result)
    })
})