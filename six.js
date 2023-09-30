const http = require('http');
const server =http.createServer((req,res)=>{

if(req.url ==='/'){
    res.end("welcome ram")
}
if(req.url ==='/about'){
    res.end("krishna about")
}
res.end(`
<h1>oops</h1>
<p>no man dont do that </p>
<a href="/">back home</a>
`)
})
server.listen(5000)