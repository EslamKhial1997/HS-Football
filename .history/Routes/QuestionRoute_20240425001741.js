const { Router } = require("express");

const {
  createQuestionService,
  getQuestionService,
} = require("../Services/QuestionService");

const Routes = Router();

Routes.route("/").post(createQuestionService).get(getQuestionService);
Routes.route("/:id")

module.exports = Routes;