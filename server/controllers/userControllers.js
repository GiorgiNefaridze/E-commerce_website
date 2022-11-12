const User = require("../models/User");

const login = async (req, res) => {
  res.send("successfuly login");
};

const signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      throw new Error("All filds must be valid");
    }

    const userAlreadyExists = await User.exists({ email });

    if (userAlreadyExists) {
      throw new Error("User with this email already exists");
    }

    if (!email.includes("@")) {
      throw new Error("Please enter a valid email");
    }

    if (password.length <= 5) {
      throw new Error("Please enter a strong password");
    }

    const user = await new User({ email, password });
    await user.save();

    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { login, signup };
