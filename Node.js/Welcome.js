const http = require('http');
const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.write('Welcome to Node.js Server');
        res.end();
    }else{
        res.write('404 Not FOund');
        res.end();
    }
});
server.listen(3000, () => console.log('Server running on http://localhost:3000'));
