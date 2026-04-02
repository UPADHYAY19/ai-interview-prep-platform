const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
  try {

    const { name, email, password } = req.body;

    // check if user exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    // remove password from response
    const { password: _, ...userWithoutPassword } = user._doc;

    res.status(201).json({
      message: "User created successfully",
      user: userWithoutPassword
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};