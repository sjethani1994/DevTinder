const http = require("http");
const Express = require("express");

const app = Express();

const server = http.createServer(app);

// app.use(Express.json());

app.use(
  "/user",
  (req, res, next) => {
    res.send("User1 route");
    next();
  },
  (req, res) => {
    res.send("User2 route");
  },
);

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
