const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const User = require('./models/user'); // Adjust the path

const resetPassword = async () => {
    await mongoose.connect('mongodb+srv://misbah7370:71TCL8e9erIhEbIF@cluster0.r9nka.mongodb.net/melody'); // Add MongoDB URI

    const email = "fatma1@gmail.com";  // Use the actual email for testing
    const newPassword = "123456789";  // New password

    // Hash the password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    console.log("New hashed password:", hashedPassword);

    // Update the user document with the new hashed password
    await User.updateOne({ email }, { $set: { password: hashedPassword } });

    console.log("Password reset and rehashed successfully.");
    process.exit();
};

resetPassword().catch(console.error);
