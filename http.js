const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url ==='/'){
        res.end('Welcome to the home page')
    }
    if(req.url === '/about'){
        res.end('Here is our history')
    }
    res.end(`
        <h1>oops!</h1>
        <p>We can't find the page that your looking for</p>
        <a href = "/"> back home </a>
        `
    )
  
})


server.listen(5000)