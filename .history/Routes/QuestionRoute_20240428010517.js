const { Router } = require("express");

const {
  createQuestionService,
  getOneQuestionService,
  getAllQuestionService,
  createQuestionOnCategory,
  updateQuestionService,
  deleteQuestionService
} = require("../Services/QuestionService");
const { QuestionValidation } = require("../Resuble/QuestionValidation");

const Routes = Router({ mergeParams: true });

Routes.route("/").post(createQuestionOnCategory,QuestionValidation ,createQuestionService).get(getAllQuestionService);
Routes.route("/:id").get(getOneQuestionService).patch(updateQuestionService).delete(deleteQuestionService)


module.exports = Routes;
