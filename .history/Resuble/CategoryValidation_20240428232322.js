const {  check, body } = require("express-validator");
const {
  MiddlewareValidator,
} = require("../Middleware/MiddlewareValidatorError");
exports.createCategoryValidator = [
  body("name").notEmpty().withMessage("is required"),

  body("description").custom((val, { req }) => {
      req.body.slug = slugify(val);
      return true;
    }),
    body("description").custom((val) =>
    createCategoryModel.findOne({ name: val }).then((Category) => {
        if (Category) {
          return Promise.reject(new Error('Name Category Already in Used'));
        }
      })),
  MiddlewareValidator,
];
exports.deleteCategoryByIdValidator = [
  check("id").isMongoId().withMessage("Sorry ID Not Available To Delete"),
  MiddlewareValidator,
];
exports.updateCategoryValidation = [
  check("id").isMongoId().withMessage("Sorry ID Not Available To Update"),
  body("description")
    .notEmpty()
    .custom((val, { req }) => {
      req.body.slug = slugify(val);
      return true;
    }),
  MiddlewareValidator,
];
