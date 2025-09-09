const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    if(req.url=='/node.html'){
        const filepath = path.join(__dirname, '../ubuntuServer/node.html');
        fs.readFile(filepath, (err, data)=>{
            if(err){
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.end('<h1>404 Not Found</h1>');
            }
            else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    }
    else {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Node actualizado en la clase de bernanardo');
    }
}).listen(5000,()=>{
    console.log('Servidor Node.js corriendo en http://localhost:5000');
});
