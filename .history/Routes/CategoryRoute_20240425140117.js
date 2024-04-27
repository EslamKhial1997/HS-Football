const { Router } = require("express");

const {
  createCategoriesService,
  uploadImage,
  resizeImage,
} = require("../Services/CategoryService");

const Routes = Router();

Routes.route("/")
  .post(uploadImage, resizeImage, createCategoriesService)
  .get(getAllCa);
// Routes.route("/:id").get(getOneQuestionService)

module.exports = Routes;
