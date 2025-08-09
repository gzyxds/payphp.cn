const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3001;
const STATIC_DIR = path.join(__dirname, '..', 'out');

const server = http.createServer((req, res) => {
  let filePath = path.join(STATIC_DIR, req.url === '/' ? 'index.html' : req.url);
  
  // Handle trailing slash for directories
  if (req.url.endsWith('/') && req.url !== '/') {
    filePath = path.join(STATIC_DIR, req.url.slice(0, -1) + '.html');
  }
  
  // If file doesn't exist, try adding .html extension
  if (!fs.existsSync(filePath) && !path.extname(filePath)) {
    filePath += '.html';
  }
  
  // If still doesn't exist, serve index.html
  if (!fs.existsSync(filePath)) {
    filePath = path.join(STATIC_DIR, 'index.html');
  }
  
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 - File Not Found</h1>');
      return;
    }
    
    const ext = path.extname(filePath);
    let contentType = 'text/html';
    
    switch (ext) {
      case '.js':
        contentType = 'text/javascript';
        break;
      case '.css':
        contentType = 'text/css';
        break;
      case '.json':
        contentType = 'application/json';
        break;
      case '.png':
        contentType = 'image/png';
        break;
      case '.jpg':
        contentType = 'image/jpg';
        break;
      case '.svg':
        contentType = 'image/svg+xml';
        break;
    }
    
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`🚀 静态文件服务器运行在 http://localhost:${PORT}`);
  console.log(`📁 服务目录: ${STATIC_DIR}`);
  console.log(`📋 按 Ctrl+C 停止服务器`);
}); 