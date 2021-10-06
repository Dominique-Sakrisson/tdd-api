const http = require('http');

const hostname = '127.0.0.1' || process.env.BACKEND_URL;
const port = 3000;
    
const server = http.createServer((req,res) => {
    res.statusCode = 200;
    console.log('hello');

    return true;
})

