const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// 设置要提供静态资源的目录
const STATIC_DIR = path.join(__dirname, '../../lib/dist'); // 你可以修改这个路径

// 创建 HTTP 服务器
const server = http.createServer((req, res) => {
  // 解析请求的 URL
  const parsedUrl = url.parse(req.url);
  let pathname = parsedUrl.pathname;
    // 构建文件的绝对路径
  let filePath = path.join(STATIC_DIR, pathname);

  // 处理根路径，指向 index.html
  if (pathname === '/') {
    pathname = '/index.html';
    filePath = path.join(process.cwd(), pathname);
  }

  console.log('filePath:', filePath);
  // 尝试读取文件
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // 文件不存在或读取错误
      if (err.code === 'ENOENT') {
        // 文件不存在
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
      } else {
        // 其他错误
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Internal Server Error');
      }
      return;
    }

    // 成功读取文件，根据文件扩展名设置正确的 Content-Type
    const extname = path.extname(filePath).toLowerCase();
    let contentType = 'text/html'; // 默认类型

    switch (extname) {
      case '.html':
        contentType = 'text/html';
        break;
      case '.css':
        contentType = 'text/css';
        break;
      case '.js':
        contentType = 'application/javascript';
        break;
      case '.json':
        contentType = 'application/json';
        break;
      case '.wasm':
        contentType = 'application/wasm';
      case '.png':
        contentType = 'image/png';
        break;
      case '.jpg':
      case '.jpeg':
        contentType = 'image/jpeg';
        break;
      case '.gif':
        contentType = 'image/gif';
        break;
      case '.svg':
        contentType = 'image/svg+xml';
        break;
      case '.ico':
        contentType = 'image/x-icon';
        break;
      case '.pdf':
        contentType = 'application/pdf';
        break;
      case '.zip':
        contentType = 'application/zip';
        break;
      default:
        // 可以根据需要添加更多类型
        break;
    }

    // 写入响应头
    res.writeHead(200, { 'Content-Type': contentType });
    // 发送文件内容
    res.end(data);
  });
});

// 指定服务器监听的端口
const PORT = 3002;

// 启动服务器
server.listen(PORT, () => {
  console.log(`静态文件服务器运行在 http://localhost:${PORT}/`);
  console.log(`服务目录: ${STATIC_DIR}`);
});