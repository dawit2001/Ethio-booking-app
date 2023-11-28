import User from "../models/User.js";

export const getUserByEmail = async (req, res, next) => {
  const { email } = req.query;
  try {
    const user = await User.findOne({ email });
    res.json(user);
  } catch (e) {
    next(e);
  }
};
