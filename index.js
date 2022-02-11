import express from "express";
import fs from "fs";

const app = express();

app.use(express.static("./static"));

function generatePage(page) {
  const header = fs.readFileSync("./static/header/header.html");

  const footer = fs.readFileSync("./static/footer/footer.html");
  return `
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
      <link href="https://fonts.googleapis.com/css2?family=Racing+Sans+One&display=swap" rel="stylesheet"> 
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet"> 
      <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700&display=swap" rel="stylesheet"> 
      <link rel="stylesheet" href="/style.css">
    </head>
    <body>
      ${header}
      ${page}
      ${footer}
    </body>
    <script src="https://unpkg.com/vue@3"></script>
    <script src="/renderCars.js"></script>
  </html>
  `;
}

app.get("/", (req, res) => {
  const main = fs.readFileSync("./static/main/main.html");
  res.send(generatePage(main));
});
app.get("/car/", (req, res) => {
  const car = fs.readFileSync("./static/car/car.html");
  res.send(generatePage(car));
});
app.listen(3000);
