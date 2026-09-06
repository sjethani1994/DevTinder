const http = require("http");
const Express = require("express");

const app = Express();

const server = http.createServer(app);

app.get("/user", (req, res) => {
  res.send({ firstName: "John", lastName: "Doe" });
});

app.post("/user", (req, res) => {
  res.send({ message: "Data is saved successfully" });
});

app.delete("/delete", (req, res) => {
  res.send({ message: "User deleted successfully" });
});

app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  res.send({ message: `User with ID ${userId} is fetched successfully` });
});

app.get("/userById", (req, res) => {
  const userId = req.query.userId;
  res.send({ message: `User with ID ${userId} is fetched successfully` });
});

// app.get(["/ac", "/abc", "/ab"], (req, res) => {
//   res.send({ message: "This route matches /ac and /abc and /ab" });
// });

// app.get(/^\/ab+c$/, (req, res) => {
//   res.send({
//     message: "Matched the route"
//   });
// });

app.use("/", (req, res) => {
  res.send("Hello, World!");
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});