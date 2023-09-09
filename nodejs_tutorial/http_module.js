const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our Home page')
    }
    if(req.url === '/about') {
        res.end('Here is our short history')
    } 
    res.end(`
    <h1>Oops</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">Go back home</a>
    `)
})

const PORT = 5000
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})