import express from "express";
import fs from "fs";

const app = express();

app.use(express.static("./static"));

app.get("/", (req, res) => {
  const header = fs.readFileSync("./static/header/header.html");

  const main = fs.readFileSync("./static/main/main.html");

  const footer = fs.readFileSync("./static/footer/footer.html");

  res.send(`
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@700&display=swap" rel="stylesheet"> 
      <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet"> 
      <link rel="stylesheet" href="style.css">

    </head>
    <body>
      ${header}
      ${main}
      ${footer}
    </body>
  </html>
  `);
});
app.listen(3000);
