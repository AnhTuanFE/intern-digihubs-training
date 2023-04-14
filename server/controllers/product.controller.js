import * as fs from "fs";
import Product from "../models/product.model.js";

import { cloudinaryUpload, cloudinaryRemove } from "../utils/cloudinary.js";
import { validationResult } from "express-validator";
import slug from "slug";
import difference from "lodash.difference";
import differenceBy from "lodash.differenceby";
import { url } from "inspector";

const createProduct = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const message = errors.array()[0].msg;
    return res.status(400).json({ message: message });
  }
  let { name, description, category, brand, keywords, variants } = req.body;

  const findProduct = Product.findOne({ name });
  //   const findCategory = Category.findById(category);
  const [existedProduct, existedCategory] = await Promise.all([
    findProduct,
    // findCategory,
  ]);
  if (existedProduct) {
    res.status(400);
    throw new Error("Tên sản phẩm đã tồn tại");
  }
  if (!existedCategory) {
    res.status(400);
    throw new Error("Thể loại không tồn tại");
  }
  let generatedSlug = slug(name);
  const existSlug = await Product.findOne({ slug: generatedSlug });
  if (existSlug) {
    generatedSlug =
      generatedSlug + "-" + Math.round(Math.random() * 10000).toString();
  }
  // upload image to cloundinary
  const images = [];
  if (req.files && req.files.length > 0) {
    const uploadListImage = req.files.map(async (image) => {
      const uploadImage = await cloudinaryUpload(
        image.path,
        "FashionShop/products"
      );
      if (!uploadImage) {
        res.status(500);
        throw new Error("Error while uploading image");
      }
      fs.unlink(image.path, (error) => {
        if (error) {
          throw new Error(error);
        }
      });
      return uploadImage.secure_url;
    });
    const imageList = await Promise.all(uploadListImage);
    images.push(...imageList);
  }
  if (images.length === 0) {
    res.status(400);
    throw new Error("Thiếu hình ảnh. Vui lòng đăng tải ít nhất 1 hình ảnh");
  }
  const product = new Product({
    name,
    slug: generatedSlug,
    description,
    category,
    images,
    brand,
    keywords,
  });
  const newProduct = await (await product.save()).populate("variants");
  res
    .status(201)
    .json({ message: "Thêm sản phẩm thành công", data: { newProduct } });
};

const productController = {
  createProduct,
};
export default productController;
