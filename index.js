import express from "express";
import bodyParser from "body-parser";

import { dirname } from "path";

import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/learning", (req, res) => {
  res.render("index.ejs", {
    title: "EJS Tags",
    dayType: "a week day",
    coin: ["head", "tail"],
    seconds: new Date().getSeconds(),
    htmlContent: "<h1>HTML Content</h1>",
  });
});

app.get("/learning/form", (req, res) => {
  res.render("form.ejs", {
    title: "Form",
  });
});
app.post("/learning/form/submit", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  res.render("form.ejs", {
    title: "Calculate the size of your input",
    nameSize: name.length,
    emailSize: email.length,
  });
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
