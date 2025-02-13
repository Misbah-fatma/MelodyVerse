const User = require('../models/user');
const crypto = require('crypto');
const sendEmail = require('../utils/sendEmail');
const bcrypt = require("bcrypt");

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find({}, '-password');
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch users: ' + err });
    }
};

exports.forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(409).json({ message: 'User not found' });
        }

        // Generate token
        const resetToken = crypto.randomBytes(32).toString('hex');
        const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex');

        // Update user directly in DB
        const updatedUser = await User.findOneAndUpdate(
            { email },
            { 
                resetPasswordToken: hashedToken, 
                resetPasswordExpire: Date.now() + 10 * 60 * 1000 // 10 minutes
            },
            { new: true } // Return the updated user
        );

        if (!updatedUser) {
            return res.status(500).json({ message: 'Failed to update reset token' });
        }

        console.log("Updated user in DB:", updatedUser);

        // Construct reset URL
        const resetUrl = `http://localhost:3000/${resetToken}`;

        const message = `You requested a password reset. Click the link below: \n\n ${resetUrl}`;

        await sendEmail({
            email: updatedUser.email,
            subject: 'Password Reset',
            message,
        });

        res.status(200).json({ message: 'Email sent successfully' });

    } catch (error) {
        console.error("Server error: ", error);
        res.status(500).json({ message: 'Server Error' });
    }
};

  exports.resetPassword = async (req, res) => {
    try {
      const resetPasswordToken = crypto.createHash('sha256').update(req.params.token).digest('hex');
  
      const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() },
      });
  
      if (!user) {
        return res.status(400).json({ message: 'Invalid or expired token' });
      }
  
      // Hash the new password before saving
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
  
      user.password = hashedPassword;
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;
  
      await user.save();
  
      res.status(200).json({ message: 'Password reset successful' });
    } catch (error) {
      console.error('Server error:', error);
      res.status(500).json({ message: 'Server Error' });
    }
  };
  
