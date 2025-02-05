const { timeStamp } = require('console');
const http = require('http');
const hostname =  '127.0.0.1';
const port = 3000;
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','application/json');

    const response = {
        message: 'Hello, API World!',
        timeStamp:  new Date(),
        path: req.url,
    };

    res.end(JSON.stringify(response, null, 2));

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});