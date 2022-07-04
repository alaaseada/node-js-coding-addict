const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/"){
        res.end("Welcome to our HTTP server's home page.");
    }else if (req.url === "/about"){
        // Blocking code!!!!!!!!!!!!!!
        for(let i=0; i< 1000; i++){
            for(let j=0; j< 1000; j++){
                console.log(`${i} and ${j}`);
            }
        }
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