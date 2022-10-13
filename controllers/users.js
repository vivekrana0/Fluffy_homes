const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = {
  create,
  login,
};

// Create user
async function create(req, res) {
  const hashedPassword = await bcrypt.hash(
    req.body.password,
    parseInt(process.env.SALT_ROUNDS)
  );
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
  res.status(200).json(token);
}

// User Login
async function login(req, res) {
  const user = await User.findOne({ email: req.body.email });
  if (!(await bcrypt.compare(req.body.password, user.password)))
    throw new Error("Bad Password");
  const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
  res.status(200).json(token);
}
