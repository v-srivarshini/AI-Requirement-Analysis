const User = require("../models/User");
const bcrypt = require("bcryptjs");

// Register User
const registerUser = async (req, res) => {
  try {
    // Get data from request body
    const { name, email, password } = req.body;

    // Check if any field is missing
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Please fill all fields",
      });
    }

    // Check if email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User Registered Successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getProfile = async (req, res) => {
  res.status(200).json({
    message: "Profile fetched successfully",
    user: req.user,
  });
};



module.exports = {
  registerUser,
  loginUser,
  getProfile,
};