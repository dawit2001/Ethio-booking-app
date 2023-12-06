const User = require("../models/User.js");

const getUserByEmail = async (req, res, next) => {
  const { email } = req.query;
  console.log(email);
  try {
    const user = await User.findOne({ email });
    res.json(user);
  } catch (e) {
    next(e);
  }
};

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.send(200).json(users);
  } catch (e) {
    next(e);
  }
};
const getUser = async (req, res, next) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    res.send(200).json(user);
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  const id = req.params.id;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.send(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  const id = req.params.id;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    res.send(200).send("user deleted successfully");
  } catch (error) {
    next(error);
  }
};

// get user from accesstoken
const getProfile = async (req, res, next) => {
  console.log(req.user);
  try {
    const user = await User.findById(req.user.id);
    console.log(user);
    if (user) {
      const { password, ...otherDetails } = user._doc;
      console.log(otherDetails);
      res.status(200).json({ ...otherDetails });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getProfile,
  getUser,
  deleteUser,
  updateUser,
  getUsers,
  getUserByEmail,
};
