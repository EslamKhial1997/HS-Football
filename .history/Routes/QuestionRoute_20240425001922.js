const { Router } = require("express");

const {
  createQuestionService,
  getOneQuestionService,
  getAllQuestionService,
} = require("../Services/QuestionService");

const Routes = Router();

Routes.route("/").post(createQuestionService)
Routes.route("/").post(.get(getAllQuestionService);)
Routes.route("/:id").get(getOneQuestionService)

module.exports = Routes;
