import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.render("index.ejs", {
    title: "EJS Tags",
    dayType: "a week day",
    coin: ["head", "tail"],
    seconds: new Date().getSeconds(),
    htmlContent: "<h1>HTML Content</h1>",
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
