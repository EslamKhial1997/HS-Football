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
const { updateCategoryValidation } = require("../Resuble/CategoryValidation");

const Routes = Router({ mergeParams: true });

Routes.route("/")
  .post(createQuestionOnCategory, QuestionValidation, createQuestionService)
  .get(getQuestionByIdValidator, getAllQuestionService);
Routes.route("/:id")
  .get(getOneQuestionService)
  .put(updateCategoryValidation, updateQuestionService)
  .delete(deleteQuestionByIdValidator, deleteQuestionService);

module.exports = Routes;
