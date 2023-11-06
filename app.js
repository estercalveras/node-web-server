const http = require('http');

const server = http.createServer((req, resp) => {
    if(req.url === '/') {
        resp.write('Hello world!');
        resp.end();
    }

    if(req.url === '/api/courses'){
        resp.write(JSON.stringify([1,2,3]));
        resp.end();
    }
});

server.listen(3000);

console.log('Listening on port 3000....')

