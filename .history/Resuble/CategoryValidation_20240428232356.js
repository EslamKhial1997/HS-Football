const { check, body } = require("express-validator");
const {
  MiddlewareValidator,
} = require("../Middleware/MiddlewareValidatorError");
exports.createCategoryValidator = [
  body("name").notEmpty().withMessage("is required"),

  body("name").custom((val, { req }) => {
    req.body.slug = slugify(val);
    return true;
  }),
  body("name").custom((val) =>
    createCategoryModel.findOne({ name: val }).then((Category) => {
      if (Category) {
        return Promise.reject(new Error("Name Category Already in Used"));
      }
    })
  ),
  MiddlewareValidator,
];
exports.getCategoryByIdValidator = [
  check("id").isMongoId().withMessage("Sorry ID Not Available To get"),
  MiddlewareValidator,
];
exports.deleteCategoryByIdValidator = [
  check("id").isMongoId().withMessage("Sorry ID Not Available To Delete"),
  MiddlewareValidator,
];
exports.updateCategoryValidation = [
  check("id").isMongoId().withMessage("Sorry ID Not Available To Update"),
  body("name")
    .notEmpty()
    .custom((val, { req }) => {
      req.body.slug = slugify(val);
      return true;
    }),
  MiddlewareValidator,
];
