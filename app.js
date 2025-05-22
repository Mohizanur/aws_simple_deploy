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
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        body {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: linear-gradient(145deg, #0f2027, #203a43, #2c5364);
          color: #f0f0f0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          text-align: center;
        }
        h1 {
          font-size: 3rem;
          margin-bottom: 20px;
          background: rgba(255, 255, 255, 0.05);
          padding: 20px 40px;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.4);
        }
        footer {
          position: fixed;
          bottom: 20px;
          width: 100%;
          text-align: center;
          font-size: 0.9rem;
          color: #aaa;
          letter-spacing: 0.5px;
        }
      </style>
    </head>
    <body>
      <h1>Welcome to Mohammed’s AWS Node App</h1>
      <footer>Powered by Node.js on AWS EC2 | Designed by Mohammed Nursefa</footer>
    </body>
    </html>
  `;

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(html);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
