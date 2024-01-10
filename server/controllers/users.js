const { createError } = require("../utils/error.js");
const { prisma } = require("../utils/prisma.js");

const getUserByEmail = async (req, res, next) => {
  const { email } = req.query;
  console.log(email);
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    console.log(user);
    res.json(user);
  } catch (e) {
    console.log(e);
    next(e);
  } finally {
    await prisma.$disconnect();
  }
};

const getUsers = async (req, res, next) => {
  try {
    const users = await prisma.user.findMany();
    res.send(200).json(users);
  } catch (e) {
    next(e);
  }
};
const getUser = async (req, res, next) => {
  const id = req.params.id;
  try {
    const user = await prisma.user.fidUnique({ where: { id: id } });
    res.send(200).json(user);
  } catch (error) {
    next(error);
  } finally {
    await prisma.$disconnect();
  }
};

const updateUser = async (req, res, next) => {
  const id = req.params.id;
  try {
    const validUser = await prisma.user.findUnique({ where: { id } });
    if (!validUser) next(createError(404, "user not found please try again"));
    const updatedUser = await prisma.user.update({
      data: req.body,
      where: {
        id: validUser.id,
      },
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  const id = req.params.id;
  try {
    const deletedUser = await prisma.user.delete({ where: { id: id } });
    res.status(200).json("user deleted successfully");
  } catch (error) {
    next(error);
  } finally {
    await prisma.$disconnect();
  }
};

// get user from accesstoken
const getProfile = async (req, res, next) => {
  console.log(req.user);
  try {
    const user = await prisma.user.findUnique({ where: { id: req.user.id } });
    console.log(user);
    if (user) {
      const { password, ...otherDetails } = user;
      console.log(otherDetails);
      res.status(200).json({ ...otherDetails });
    }
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
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
