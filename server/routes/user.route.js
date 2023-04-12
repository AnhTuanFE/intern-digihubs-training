import express from "express";
import asyncHandler from "express-async-handler";
import userController from "../controllers/user.controller.js";
import validate from "../middleware/validate.middleware.js";
import User from "../models/user.model.js";
import generateAuthToken from "../utils/generateToken.js";

const userRouter = express.Router();
userRouter.post(
  "/register",
  // validate.register,
  // asyncHandler(userController.register)
  asyncHandler(async (req, res) => {
    const { name, email, phone, password } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error("Tài khoản đã tồn tại");
    }

    const user = await User.create({
      name,
      email,
      phone,
      password,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        avatar: user.avatar,
        gender: user.gender,
        birthday: user.birthday,
        address: user.address,
        token: generateAuthToken(user._id),
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      });
    } else {
      res.status(400);
      throw new Error("Invalid User Data");
    }
  })
);
export default userRouter;
