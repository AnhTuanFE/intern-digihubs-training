import express from "express";
import asyncHandler from "express-async-handler";
import userController from "../controllers/user.controller.js";
import validate from "../middleware/validate.middleware.js";

const userRouter = express.Router();
userRouter.post(
  "/register",
  validate.register,
  asyncHandler(userController.register)
);
//  validate.login,
userRouter.post("/login", asyncHandler(userController.login));

export default userRouter;
