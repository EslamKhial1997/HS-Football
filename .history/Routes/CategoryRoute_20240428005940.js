const { Router } = require("express");

const {
  createCategoriesService,
  uploadImage,
  resizeImage,
  getAllCategories,
} = require("../Services/CategoryService");
const RouetsQuestion = require("./QuestionRoute");
const { updateQuestionService } = require("../Services/QuestionService");
const Routes = Router();
Routes.use("/:categoryId/question", RouetsQuestion);
Routes.route("/")
  .post(uploadImage, resizeImage, createCategoriesService)
  .get(getAllCategories);
Routes.route("/:id").get(getOneQuestionService)
Routes.route("/:id").patch(updateQuestionService).delete(deleteQ)

module.exports = Routes;
