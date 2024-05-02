/**
 * Impor HTTP Standar Library dari Node.js
 * Hal inilah yang nantinya akan kita gunakan untuk membuat
 * HTTP Server
 * */
const http = require('http');
const fs = require('fs');
const path = require('path');
const { PORT = 8000 } = process.env;

const PUBLIC_DIRECTORY = path.join(__dirname, '../public');

function getContentType(filePath) {
    const extname = path.extname(filePath);
    switch (extname) {
        case '.js':
            return 'text/javascript';
        case '.css':
            return 'text/css';
        case '.jpg':
        case '.jpeg':
            return 'image/jpeg';
        case '.png':
            return 'image/png';
        default:
            return '';
    }
}

function onRequest(req, res) {
    let filePath = path.join(PUBLIC_DIRECTORY, req.url === '/' ? 'index.html' : req.url);

    if (req.url === '/cars') {
        filePath = path.join(PUBLIC_DIRECTORY, 'cars.html');
    };
    // if (req.irl === '/our-services-section') {
    //     filePath = path.join(PUBLIC_DIRECTORY, req.url);
    // };

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // File not found
                res.writeHead(404);
                res.end('404 - File Not Found');
            } else {
                // Server error
                res.writeHead(500);
                res.end('500 - Internal Server Error');
            }
        } else {
            // File found
            res.writeHead(200, { 'Content-Type': getContentType(filePath) });
            res.end(content);
        }
    });
}

const server = http.createServer(onRequest);

server.listen(PORT, 'localhost', () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
