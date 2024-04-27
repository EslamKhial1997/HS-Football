const { Router } = require("express");

const {
  createQuestionService,
  getOneQuestionService,
  getAllQuestionService,
} = require("../Services/QuestionService");

const Routes = Router();

Routes.route("/").post(QuestionValidation ,createQuestionService).get(getAllQuestionService);
Routes.route("/:id").get(getOneQuestionService)

module.exports = Routes;
