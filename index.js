const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

let users = [
  {
    firstname: "Morgan",
    lastname: "Freeman"
  },
  {
    firstname: "First",
    lastname: "Aid"
  }
];

app.get("/", (req, res) => res.send(`Hello World! from port: ${port}`));
app.get("/users", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.json(users);
});

app.listen(port, () =>
  console.log(`Example app listening on port http://127.0.0.1:${port}`)
);
