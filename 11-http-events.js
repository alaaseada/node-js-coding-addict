const http = require("http");

const server = http.createServer();

// the server has an event-emitter that listen for 'request' event
server.on('request', (req, res) => {
    if (req.url === "/"){
        res.end("Welcome to our HTTP server's home page.");
    }else if (req.url === "/about"){
        res.end("This is our About page");
    }else{
        res.end(`
        <h1>Sorry, the page you requested is not found.<a href="/">Home</a></h1>
        `);
    }
})

server.listen(5000, () => {
    console.log("The server is listening to port 5000.");
})