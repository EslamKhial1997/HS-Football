const { Router } = require("express");

const {
  createQuestionService,
  getOneQuestionService,
  getAllQuestionService,
  createQuestionOnCategory,
} = require("../Services/QuestionService");
const { QuestionValidation } = require("../Resuble/QuestionValidation");

const Routes = Router({ mergeParams: true });

Routes.route("/").post(QuestionValidation ,createQuestionOnCategory,createQuestionService).get(getAllQuestionService);
Routes.route("/:id").get(getOneQuestionService)

module.exports = Routes;
