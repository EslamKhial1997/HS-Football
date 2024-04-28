const { body, check } = require("express-validator");
const { default: slugify } = require("slugify/slugify");
const { MiddlewareValidator } = require("../Middleware/MiddlewareValidatorError");


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
exports.updateCategoryByIdValidator = [
  check("id").isMongoId().withMessage("Sorry ID Not Available To Update"),
  body("name")
    .optional()
    .custom((val, { req }) => {
      req.body.slug = slugify(val);
      return true;
    }),
  check("image").optional(),
  MiddlewareValidator,
];
