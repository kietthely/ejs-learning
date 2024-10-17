import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const today = new Date();
  const currentDay = today.getDay();
  console.log(currentDay);
  res.render("index.ejs", {
    dayType: "a week day",
    advice: "It's time to learn coding!",
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
