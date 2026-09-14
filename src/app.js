const http = require("http");
const Express = require("express");
const connectDB = require("./config/database");
const app = Express();

const server = http.createServer(app);
const User = require("./models/user");

app.use(Express.json());

app.post("/api/signup", async (req, res) => {
  try {
    const { firstName, lastName, email, password, role, gender, age } = req.body;
    // create a new user instance of User Schema / User Model and save it to the database
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
      role: role || "user",
      gender,
      age,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});


app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

connectDB()
  .then(() => {
    console.log("MongoDB connected");
    server.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log(`Error: ${err.message}`);
    process.exit(1);
  });
