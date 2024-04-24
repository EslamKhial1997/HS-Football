const { Router } = require("express");

const {
  createQuestionService,
  getQuestionService,
  getOneQuestionService,
  getAllQuestionService,
} = require("../Services/QuestionService");

const Routes = Router();

Routes.route("/").post(createQuestionService).get(getAllQuestionService);
Routes.route("/:id").get(getOneQuestionService)

module.exports = Routes;
