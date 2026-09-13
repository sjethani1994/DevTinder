const http = require("http");
const Express = require("express");

const app = Express();

const server = http.createServer(app);

// app.use(Express.json());
const { adminAuth, userAuth } = require("./middlewares/auth");

app.use("/admin", adminAuth); // Apply the adminAuth middleware to all /admin routes
//app.use("/users", userAuth); // Apply the userAuth middleware to all /users routes

app.get("/users", userAuth, (req, res) => {
  try {
    res.status(200).json({ message: "User data retrieved successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/admin/getAllUsersData", (req, res) => {
  try {
    res.status(200).json({ message: "Data retrieved successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/admin/deleteUser", (req, res) => {
  try {
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
