const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const t = new Date().getTime();
  let a = 0;
  for (let i = 0; i < 10000000000; i++) {
    a += i;
  }
  console.log(new Date().getTime() - t);
  res.send(`hello world ${a}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
