const user = require("../models/userModels");
const bcrypt = require("bcryptjs");

// signup logic
const signup = async (req, res, next) => {
  console.log(req.body, 5);
  try {
    const { username, email, phone, password } = req.body;
    const userExist = await user.findOne({ email });

    console.log(userExist, 10);
    
    if (userExist) {
      return res.status(400).json({ msg: "email already exists" });
    }

    const userCreated = await user.create({
      username,
      email,
      phone,
      password,
    });

    console.log(userCreated, 23);

    res.status(201).json({
      msg: "registration successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// login logic
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userExist = await user.findOne({ email });

    if (!userExist) {
      return res.status(400).json({ message: "invalid credentials" });
    }

    const checkPassword = await userExist.comparePassword(password);

    if (checkPassword) {
      res.status(200).json({
        msg: "login successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "invalid email or password" });
    }
  } catch (error) {
    next(error);
    console.log(error);
  }
};

// getting all user data from mongodb
const User = async (req, res) => {
  try {
    const userData = req.user;
    return res.status(200).json({ userData });
  } catch (error) {
    console.error(`errore from the userlogic of server ${error}`);
  }
};

module.exports = { signup, login, User };
