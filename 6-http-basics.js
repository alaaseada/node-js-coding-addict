const http = require("http")

const server = http.createServer((req, res) => {
    if (req.url === "/"){
        res.end("Welcome to our HTTP server's home page.")
    }else if (req.url === "/about"){
            res.end("This is our About page")
    }else{
        res.end(`
        <h1>Sorry, the page you requested is not found.<a href="/">Home</a></h1>
        `)
    }
})

server.listen(5000)