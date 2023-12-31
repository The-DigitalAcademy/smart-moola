const bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");
const JwtSecret = require("../config/JwtSecret.config");
const nodemailer = require("nodemailer");
var currentOtp = "";

const User = require("../models/user.model"); // Import the Sequelize model for "User"

const sendVerificationEmail = (req, res, email, otp, callback) => {
  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "owethusotomela@gmail.com",
      pass: "ywsjnzgnypziayyx",
    },
  });

  const mailOptions = {
    from: "owethusotomela@gmail.com",
    to: email,
    subject: "Email Verification OTP",
    text: `Enter this OTP: ${otp} to reset your password`,
  };

  transporter.sendMail(mailOptions, callback);
};

const sendEmail = async (req, res) => {
  const { email } = req.body;
  console.log("Request Body:", req.body);

  const otp = Math.floor(1000 + Math.random() * 9000).toString();
  currentOtp = otp;

  console.log("Otp", otp);

  try {
    // Call the sendVerificationEmail function from the same controller
    sendVerificationEmail(req, res, email, otp, (error, info) => {
      if (error) {
        console.log("Error sending email: ", error);
        res.status(500).send({ error: "Error sending email" });
      } else {
        console.log("Email sent: ", info.response);
        res.status(200).send({ message: "Email sent successfully" });
      }
    });
  } catch (error) {
    console.log("Error sending email:", error);
    res.status(500).send({ error: "Internal server error" });
  }
};

const createUser = async (request, response) => {
  const { fullName, email, password, confirmPassword } = request.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user using Sequelize's 'create' method
    const newUser = await User.create({
      fullName: fullName,
      email: email,
      password: hashedPassword,
      confirmPassword: confirmPassword,
    });

    console.log("newUser", newUser);

    // Generate a token for the newly registered user
    let token = jwt.sign({ id: newUser.id }, JwtSecret.secret, {
      expiresIn: 86400,
    });
  
      console.log("Token:", token); 

    response.status(201).send({
      message: `User added with ID: ${newUser.id}`,
      user: {
        id: newUser.id,
        fullName: fullName,
        email: email,
        accessToken: token,
      },
    });
  } catch (error) {
    console.error("Error creating user", error);
    response.status(500).send({ error: "Internal server error" });
  }
};

const getUsers = async (request, response) => {
  try {
    // Use Sequelize's 'findAll' method to get all users from the database
    const users = await User.findAll();

    // Send the array of user objects as the response
    response.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users", error);
    response.status(500).send({ error: "Internal server error" });
  }
};

const getUserById = async (request, response) => {
  const id = parseInt(request.params.id);

  try {
    // Use Sequelize's 'findByPk' method to get a user by ID from the database
    const user = await User.findByPk(id);

    if (!user) {
      return response.status(404).send({ message: "User not found" });
    }

    response.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user by ID", error);
    response.status(500).send({ error: "Internal server error" });
  }
};

const updateUser = async (request, response) => {
  const id = parseInt(request.params.id);
  const { fullName, email, password } = request.body;

  try {
    // Find the user by ID using Sequelize's 'findByPk' method
    const user = await User.findByPk(id);

    if (!user) {
      return response.status(404).send({ message: "User not found" });
    }

    // Update the user properties
    user.fullName = fullName;
    user.email = email;
    user.password = password; // Assuming the password is already hashed

    // Save the updated user to the database
    await user.save();

    response.status(200).send(`User modified with ID: ${id}`);
  } catch (error) {
    console.error("Error updating user", error);
    response.status(500).send({ error: "Internal server error" });
  }
};

const isOtpValid = (req, res) => {
  const { otp } = req.body;

  if (otp === currentOtp) {
    return res.status(200).json({ otpIsVerified: true });
  } else {
    return res.status(404).json({ otpIsVerified: false });
  }
};

const updatePassword = async (req, res) => {
  try {
    const { email, password, confirmPassword } = req.body;

    const user = await findOne(email);

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update the user's password and confirmPassword
    user.password = hashedPassword;
    user.confirmPassword = confirmPassword;

    await user.save();

    res.status(200).send({ message: "Password updated!" });
  } catch (err) {
    res.status(500).send({ message: err.message + "Testing" });
  }
};

const deleteUser = async (request, response) => {
  const id = parseInt(request.params.id);

  try {
    // Find the user by ID using Sequelize's 'findByPk' method
    const user = await User.findByPk(id);

    if (!user) {
      return response.status(404).send({ message: "User not found" });
    }

    // Delete the user
    await user.destroy();

    response.status(200).send(`User deleted with ID: ${id}`);
  } catch (error) {
    console.error("Error deleting user", error);
    response.status(500).send({ error: "Internal server error" });
  }
};

const findOne = async (email) => {
  try {
    // Use Sequelize's 'findOne' method to find a user by email
    const user = await User.findOne({ where: { email } });
    return user;
  } catch (error) {
    throw error;
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const User = await findOne(email);
    console.log("User", User);

    if (!User) {
      return res.status(404).send({ message: "Bad Credentials" });
    }

    const dbPass = User.password;

    const pass = bcrypt.compareSync(password, dbPass);

    console.log("Entered Password:", password);
    console.log("Database Password:", dbPass);
    console.log("Password Comparison Result:", pass);

    if (!pass) {
      return res.status(401).send({
        message: "Invalid password",
      });
    }

    let token = jwt.sign({ id: User.id }, JwtSecret.secret, {
      expiresIn: 86400,
    });

    const { id, fullName, role } = User;

    res.status(200).send({
      id: id,
      fullName: fullName,
      email: email,
      role: role,
      accessToken: token,
    });
  } catch (err) {
    res.status(500).send({ message: err.message + "Testing" });
  }
};

exports.deleteAll = async (req, res) => {
  try {
    // Delete all users from the database using Sequelize's 'destroy' method
    const deletedCount = await User.destroy({ where: {} });
    res.status(200).send({
      message: `${deletedCount} Users were deleted successfully!`,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while removing all users.",
    });
  }
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  login,
  sendEmail,
  isOtpValid,
  updatePassword
};
