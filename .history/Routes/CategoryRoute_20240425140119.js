const { Router } = require("express");

const {
  createCategoriesService,
  uploadImage,
  resizeImage,
  getAllCategories,
} = require("../Services/CategoryService");

const Routes = Router();

Routes.route("/")
  .post(uploadImage, resizeImage, createCategoriesService)
  .get(getAllCategories);
// Routes.route("/:id").get(getOneQuestionService)

module.exports = Routes;
