const { Router } = require("express");

const {
  createQuestionService,
  getOneQuestionService,
  getAllQuestionService,
  createQuestionOnCategory,
  updateQuestionService,
  deleteQuestionService,
  uploadImage,
} = require("../Services/QuestionService");
const {
  QuestionValidation,
  deleteQuestionByIdValidator,
  getQuestionByIdValidator,
  updateQuestionValidation,
} = require("../Resuble/QuestionValidation");



const Routes = Router({ mergeParams: true });

Routes.route("/")
  .post(uploadImage,createQuestionOnCategory, QuestionValidation, createQuestionService)
  .get( getAllQuestionService);
Routes.route("/:id")
  .get(getQuestionByIdValidator,getOneQuestionService)
  .put(updateQuestionValidation, updateQuestionService)
  .delete(deleteQuestionByIdValidator, deleteQuestionService);

module.exports = Routes;
