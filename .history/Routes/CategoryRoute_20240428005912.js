const { Router } = require("express");

const {
  createCategoriesService,
  uploadImage,
  resizeImage,
  getAllCategories,
} = require("../Services/CategoryService");
const RouetsQuestion = require("./QuestionRoute");
const Routes = Router();
Routes.use("/:categoryId/question", RouetsQuestion);
Routes.route("/")
  .post(uploadImage, resizeImage, createCategoriesService)
  .get(getAllCategories);
Routes.route("/:id").get(getOneQuestionService)
Routes.route("/:id").pat(getOneQuestionService)

module.exports = Routes;
