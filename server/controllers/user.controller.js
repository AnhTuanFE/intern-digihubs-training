import dotenv from "dotenv";
import User from "../models/user.model.js";
import { validationResult } from "express-validator";
import generateAuthToken from "../utils/generateToken.js";

dotenv.config();

const login = async (req, res) => {
  // Validate the request data using express-validator
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const message = errors.array()[0].msg;
    return res.status(400).json({ message: message });
  }

  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    if (user.isVerified === false) {
      res.status(401);
      throw new Error(
        "Tài khoản của bạn chưa được xác minh. Vui lòng kiểm tra email của bạn để xác minh tài khoản trước khi đăng nhập."
      );
    }
    const userData = {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      phone: user.phone,
      avatar: user.avatar,
      gender: user.gender,
      birthday: user.birthday,
      address: user.address,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
    const generateToken = generateAuthToken(user._id);
    res.status(200).json({
      data: {
        user: userData,
        ...generateToken,
      },
    });
  } else {
    res.status(401);
    throw new Error("Email hoặc mật khẩu sai");
  }
};

const register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const message = errors.array()[0].msg;
    return res.status(400).json({ message: message });
  }

  const { name, phone, password, email } = req.body;
  //   const email = req.body.email.toString().toLowerCase();
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
};

const userController = {
  login,
  register,
};
export default userController;
