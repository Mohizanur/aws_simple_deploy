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
          background: linear-gradient(135deg, #1d2b64, #f8cdda);
          color: #ffffff;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          text-align: center;
          padding-top: 80px;
          margin: 0;
        }
        h1 {
          font-size: 2.7rem;
          padding: 20px 40px;
          background-color: rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.2);
          display: inline-block;
          margin-bottom: 20px;
        }
        footer {
          position: fixed;
          bottom: 20px;
          width: 100%;
          color: #dddddd;
          font-size: 0.85rem;
          letter-spacing: 0.5px;
        }
      </style>
    </head>
    <body>
      <h1>Mohammed Nursefa’s Custom AWS Node App</h1>
      <footer>Deployed on AWS EC2 | Ubuntu Server | Node.js</footer>
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
