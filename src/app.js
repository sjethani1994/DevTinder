const http = require("http");
const Express = require("express");

const app = Express();
const server = http.createServer(app);

app.use("/get", (req, res) => {
  res.send("Hello, World.......................!");
});

app.use("/", (req, res) => {
  res.send("Hello, World!");
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
