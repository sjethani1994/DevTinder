const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://sjethani651:Sjethani%4094@hatch.zcgjpl5.mongodb.net/devTinder",
  );
};

module.exports = connectDB;
