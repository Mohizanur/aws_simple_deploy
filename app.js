const http = require("http");

const hostname = "0.0.0.0";
const port = 3000;

const server = http.createServer((req, res) => {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Mohammed's AWS App</title>
      <style>
        body {
          background: linear-gradient(to right, #00c6ff, #0072ff);
          color: white;
          font-family: sans-serif;
          text-align: center;
          padding-top: 100px;
          margin: 0;
        }
        h1 {
          font-size: 2.5rem;
          padding: 15px;
          border-radius: 10px;
          background-color: rgba(255, 255, 255, 0.1);
          display: inline-block;
        }
        footer {
          position: absolute;
          bottom: 20px;
          width: 100%;
          color: #ccc;
          font-size: 0.8rem;
        }
      </style>
    </head>
    <body>
      <h1>Welcome to Mohammed’s Node App on AWS 🚀</h1>
      <footer>Built with 💻 on Ubuntu EC2 | by Mohammed Nursefa</footer>
    </body>
    </html>
  `;

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(html);
});

server.listen(port, hostname, () => {
  console.log(`✅ Server running at http://${hostname}:${port}/`);
});
