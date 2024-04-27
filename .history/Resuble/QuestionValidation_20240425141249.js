const { body, check } = require("express-validator");
const { default: slugify } = require("slugify/slugify");
const {
  MiddlewareValidator,
} = require("../Middleware/MiddlewareValidatorError");

exports.QuestionValidation = [
  body("description")
    .notEmpty()
    .withMessage("description is required")
    .custom((val, { req }) => {
      req.body.slug = slugify(val);
      return true;
    }),
  check("category")
    .isMongoId()
    .notEmpty()
    .withMessage("required ID Category"),

  MiddlewareValidator,
];
// exports.getSubCategoryByIdValidator = [
//   check("id")
//     .isMongoId()
//     .withMessage("Sorry ID Not Available To get CreateSubCategory Validator"),
//   MiddlewareValidator,
// ];
exports.updateSubCategoryByIdValidator = [
  check("id")
    .isMongoId()
    .withMessage(
      "Sorry ID Not Available To Update CreateSubCategory Validator"
    ),
  body("name").custom((val, { req }) => {
    req.body.slug = slugify(val);
    return true;
  }),
  MiddlewareValidator,
];
exports.deleteSubCategoryByIdValidator = [
  check("id")
    .isMongoId()
    .withMessage(
      "Sorry ID Not Available To Delete CreateSubCategory Validator"
    ),
  MiddlewareValidator,
];
