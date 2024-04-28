const { Router } = require("express");

const {
  createQuestionService,
  getOneQuestionService,
  getAllQuestionService,
  createQuestionOnCategory,
  updateQuestionService,
  deleteQuestionService,
} = require("../Services/QuestionService");
const {
  QuestionValidation,
  deleteQuestionByIdValidator,
  getQuestionByIdValidator,
} = require("../Resuble/QuestionValidation");


const Routes = Router({ mergeParams: true });

Routes.route("/")
  .post(createQuestionOnCategory, QuestionValidation, createQuestionService)
  .get( getAllQuestionService);
Routes.route("/:id")
  .get(getQuestionByIdValidator,getOneQuestionService)
  .put(update, updateQuestionService)
  .delete(deleteQuestionByIdValidator, deleteQuestionService);

module.exports = Routes;
