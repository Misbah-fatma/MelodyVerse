const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://misbah7370:71TCL8e9erIhEbIF@cluster0.r9nka.mongodb.net/melody', {
    });
    console.log("MongoDB Connected Successfully!");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1); // Exit the process if connection fails
  }
};

module.exports = connectDB;