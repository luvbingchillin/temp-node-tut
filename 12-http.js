const http = require('http');
const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end('welome you bum')
    }
    if(req.url=='/about'){
        res.end('im the goat')

    }
    res.end(`<h1>whoops<h1><p>we are so cooked son<p><a href='/
        '>back home<a>`)
})

server.listen(5000)