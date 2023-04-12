import { body, check, validationResult } from "express-validator";
import { ObjectId } from "mongodb";

// validate là 1 object, mỗi thuộc tính sẽ là một mảng trả về giá trị
const validate = {
  //====================Validate User==================
  register: [
    check("name").trim().not().isEmpty().withMessage("Tên không được để trống"),
    check("email")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Email không được để trống")
      .isEmail()
      .withMessage("Địa chỉ email không hợp lệ"),
    check("phone")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Số điện thoại không được để trống")
      .isLength({ min: 10, max: 10 })
      .withMessage("Số điện thoại không hợp lệ")
      .isMobilePhone()
      .withMessage("Số điện thoại không hợp lệ"),
    check("password")
      .not()
      .isEmpty()
      .withMessage("Mật khẩu không được để trống")
      .matches(/^(?=.*[A-Za-z])(?=.*\d)[^\s]{6,255}$/)
      .withMessage(
        "Mật khẩu phải từ 6 - 255 ký tự, ít nhất 1 chữ cái, 1 chữ số và không có khoảng trắng"
      ),
    check("confirmPassword").custom((confirmPassword, { req }) => {
      if (confirmPassword !== req.body.password) {
        throw new Error("Xác nhận mật khẩu không khớp");
      }
      return true;
    }),
  ],
  login: [
    check("email")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Email không được để trống")
      .isEmail()
      .withMessage("Địa chỉ email không hợp lệ"),
    check("password")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Mật khẩu không được để trống"),
  ],
  updateProfile: [
    check("name").trim().not().isEmpty().withMessage("Tên không được để trống"),
    check("phone")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Số điện thoại không được để trống")
      .isLength({ min: 10, max: 10 })
      .withMessage("Số điện thoại không hợp lệ")
      .isMobilePhone()
      .withMessage("Số điện thoại không hợp lệ"),
    check("gender")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Giới tính không được để trống")
      .custom((gender) => {
        if (gender !== "male" && gender !== "female" && gender !== "other") {
          throw new Error(
            'Giới tính phải là "male" hoặc "female" hoặc "other"'
          );
        }
        return true;
      }),
    check("birthday")
      .not()
      .isEmpty()
      .withMessage("Ngày sinh không được để trống")
      .isDate()
      .withMessage("Ngày sinh không hợp lệ")
      .custom((birthday) => {
        if (new Date(birthday) >= new Date()) {
          throw new Error("Ngày sinh phải bé hơn thời gian hiện tại");
        }
        return true;
      }),
    check("address").custom((address) => {
      if (!address) {
        throw new Error("Địa chỉ không được để trống");
      }
      if (!address.province || address.province.trim() === "") {
        throw new Error("Tỉnh/Thành phố không được để trống");
      }
      if (!address.district || address.district.trim() === "") {
        throw new Error("Quận/Huyện không được để trống");
      }
      if (!address.ward || address.ward.trim() === "") {
        throw new Error("Phường/Xã không được để trống");
      }
      if (!address.specificAddress || address.specificAddress.trim() === "") {
        throw new Error("Địa chỉ chi tiết không được để trống");
      }
      return true;
    }),
  ],
  forgotPassword: [
    check("email")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Email không được để trống")
      .isEmail()
      .withMessage("Địa chỉ email không hợp lệ"),
  ],
  resetPassword: [
    check("newPassword")
      .not()
      .isEmpty()
      .withMessage("Mật khẩu không được để trống")
      .matches(/^(?=.*[A-Za-z])(?=.*\d)[^\s]{6,255}$/)
      .withMessage(
        "Mật khẩu phải từ 6 - 255 ký tự, ít nhất 1 chữ cái, 1 chữ số và không có khoảng trắng"
      ),
    check("confirmPassword").custom((confirmPassword, { req }) => {
      if (confirmPassword !== req.body.password) {
        throw new Error("Xác nhận mật khẩu không khớp");
      }
      return true;
    }),
    check("resetPasswordToken")
      .not()
      .isEmpty()
      .withMessage("Token đặt lại mật khẩu không hợp lệ"),
  ],
  changePassword: [
    check("currentPassword")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Mật khẩu hiện tại không được để trống"),
    check("newPassword")
      .not()
      .isEmpty()
      .withMessage("Mật khẩu mới không được để trống")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,255}$/
      )
      .withMessage(
        "Mật khẩu phải từ 8 - 255 ký tự, ít nhất 1 chữ hoa, 1 chữ thường, 1 số, 1 ký tự đặc biệt và không có khoảng trắng"
      ),
  ],

  //====================Validate Product==================
  getProductById: [
    check("id").custom((id) => {
      if (!ObjectId.isValid(id)) {
        throw new Error("ID sản phẩm không hợp lệ");
      }
      return true;
    }),
  ],
  createProduct: [
    check("name")
      .trim()
      .notEmpty()
      .withMessage("Tên sản phẩm không được để trống"),
    check("description")
      .trim()
      .notEmpty()
      .withMessage("Mô tả sản phẩm không được để trống"),
    check("category")
      .notEmpty()
      .withMessage("Thể loại sản phẩm không được để trống")
      .custom((category) => {
        if (!ObjectId.isValid(category)) {
          throw new Error("ID thể loại không hợp lệ");
        }
        return true;
      }),
    check("brand")
      .trim()
      .notEmpty()
      .withMessage("Thương hiệu sản phẩm không được để trống"),
    check("keywords")
      .isArray()
      .withMessage("Danh sách từ khóa sản phẩm phải là mảng "),
    check("variants")
      .isArray()
      .withMessage("Danh sách biến thể phải là mảng")
      .notEmpty()
      .withMessage("Danh sách các biến thể không được để trống"),
    check("variants.*.price")
      .notEmpty()
      .withMessage("Giá của các biến thể sản phẩm không được để trống")
      .isInt({ min: 0 })
      .withMessage(
        "Giá của các biến thể sản phẩm phải là số nguyên và phài lớn hơn hoặc bằng 0"
      ),
    check("variants.*.priceSale")
      .notEmpty()
      .withMessage("Giá đã giảm của các biến thể sản phẩm không được để trống")
      .isInt({ min: 0 })
      .withMessage(
        "Giá đã giảm của các biến thể sản phẩm phải là số nguyên và phài lớn hơn hoặc bằng 0"
      ),
    check("variants.*.quantity")
      .notEmpty()
      .withMessage("Số lượng các biến thể sản phẩm không được để trống")
      .isInt({ min: 0 })
      .withMessage(
        "Số lượng các biến thể sản phẩm phải là số nguyên và phài lớn hơn hoặc bằng 0"
      ),
    check("variants.*.attributes")
      .isArray()
      .withMessage("Danh sách thuộc tính của biến thể phải là mảng")
      .notEmpty()
      .withMessage("Danh sách thuộc tính các biến thể không được để trống"),
    check("variants.*.attributes.*.name")
      .trim()
      .notEmpty()
      .withMessage(
        "Tên các thuộc tính của biến thể sản phẩm không được để trống"
      ),
    check("variants.*.attributes.*.value")
      .trim()
      .notEmpty()
      .withMessage(
        "Giá trị các thuộc tính của biến thể sản phẩm không được để trống"
      ),
  ],
  updateProduct: [
    check("id").custom((id) => {
      if (!ObjectId.isValid(id)) {
        throw new Error("ID sản phẩm không hợp lệ");
      }
      return true;
    }),
    check("name")
      .trim()
      .notEmpty()
      .withMessage("Tên sản phẩm không được để trống"),
    check("description")
      .trim()
      .notEmpty()
      .withMessage("Mô tả sản phẩm không được để trống"),
    check("category")
      .notEmpty()
      .withMessage("Thể loại sản phẩm không được để trống")
      .custom((category) => {
        if (!ObjectId.isValid(category)) {
          throw new Error("ID thể loại không hợp lệ");
        }
        return true;
      }),
    check("images").isArray().withMessage("Danh sách hình ảnh phải là mảng"),
    check("images.*")
      .isURL()
      .withMessage("Danh sách hình ảnh phải là các URL hoặc file"),
    check("brand")
      .trim()
      .notEmpty()
      .withMessage("Thương hiệu sản phẩm không được để trống"),
    check("keywords")
      .isArray()
      .withMessage("Danh sách từ khóa sản phẩm phải là mảng "),
    check("variants")
      .isArray()
      .withMessage("Danh sách biến thể phải là mảng")
      .notEmpty()
      .withMessage("Danh sách các biến thể không được để trống"),
    check("variants.*.price")
      .notEmpty()
      .withMessage("Giá của các biến thể sản phẩm không được để trống")
      .isInt({ min: 0 })
      .withMessage(
        "Giá của các biến thể sản phẩm phải là số nguyên và phài lớn hơn hoặc bằng 0"
      ),
    check("variants.*.priceSale")
      .notEmpty()
      .withMessage("Giá đã giảm của các biến thể sản phẩm không được để trống")
      .isInt({ min: 0 })
      .withMessage(
        "Giá đã giảm của các biến thể sản phẩm phải là số nguyên và phài lớn hơn hoặc bằng 0"
      ),
    check("variants.*.quantity")
      .notEmpty()
      .withMessage("Số lượng các biến thể sản phẩm không được để trống")
      .isInt({ min: 0 })
      .withMessage(
        "Số lượng các biến thể sản phẩm phải là số nguyên và phải lớn hơn hoặc bằng 0"
      ),
    check("variants.*.attributes")
      .isArray()
      .withMessage("Danh sách thuộc tính của biến thể phải là mảng")
      .notEmpty()
      .withMessage("Danh sách thuộc tính các biến thể không được để trống"),
    check("variants.*.attributes.*.name")
      .trim()
      .notEmpty()
      .withMessage(
        "Tên các thuộc tính của biến thể sản phẩm không được để trống"
      ),
    check("variants.*.attributes.*.value")
      .trim()
      .notEmpty()
      .withMessage(
        "Giá trị các thuộc tính của biến thể sản phẩm không được để trống"
      ),
  ],

  hide: [
    check("id").custom((id) => {
      if (!ObjectId.isValid(id)) {
        throw new Error("ID sản phẩm không hợp lệ");
      }
      return true;
    }),
  ],
  unhide: [
    check("id").custom((id) => {
      if (!ObjectId.isValid(id)) {
        throw new Error("ID sản phẩm không hợp lệ");
      }
      return true;
    }),
  ],
  restore: [
    check("id").custom((id) => {
      if (!ObjectId.isValid(id)) {
        throw new Error("ID sản phẩm không hợp lệ");
      }
      return true;
    }),
  ],
  delete: [
    check("id").custom((id) => {
      if (!ObjectId.isValid(id)) {
        throw new Error("ID sản phẩm không hợp lệ");
      }
      return true;
    }),
  ],
};
export default validate;
