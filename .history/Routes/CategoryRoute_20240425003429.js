const { Router } = require("express");

const {
  createQuestionService,
  getOneQuestionService,
  getAllQuestionService,
} = require("../Services/QuestionService");
const { createCategories } = require("../Services/CategoryService");

const Routes = Router();

Routes.route("/").post(createCategoriesService)
Routes.route("/:id").get(getOneQuestionService)

module.exports = Routes;
