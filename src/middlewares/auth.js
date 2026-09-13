
// Middleware to check authentication for admin routes
const adminAuth = (req, res, next) => {
  //const token = req.headers["authorization"]; // Assuming the token is sent in the Authorization header
  const token = "xyz"; // Replace with your authentication logic
  const isAuthenticated = token === "xyz"; // Replace with your authentication logic

  if (!isAuthenticated) {
    return res.status(401).json({ message: "Unauthorized" });
  } else {
    next();
  }
};


const userAuth = (req, res, next) => {
//const token = req.headers["authorization"];
  const token = "abc"; // Replace with your authentication logic
  const isAuthenticated = token === "abc"; // Replace with your authentication logic

  if (!isAuthenticated) {
    return res.status(401).json({ message: "Unauthorized" });
  } else {
    next();
  }
};

module.exports = { adminAuth, userAuth };