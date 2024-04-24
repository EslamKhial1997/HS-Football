const { Router } = require("express");

const {
  createQuestionService,
  getQuestionService,
  getOneQuestionService,
} = require("../Services/QuestionService");

const Routes = Router();

Routes.route("/").post(createQuestionService).get(getAll);
Routes.route("/:id").get(getOneQuestionService)

module.exports = Routes;
