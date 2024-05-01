const { Router } = require("express");
const { createQuestionTypeService, getAllQuestionType, getOneQuestionType } = require("../Services/QuestionTypeServer");


const Routes = Router();

Routes.route("/").post(createQuestionTypeService).get(getAllQuestionType);
Routes.route("/:id")
  .get(getOneQuestionType)
  .put(updateQuestionService)
  .delete(deleteQuestionService);

module.exports = Routes;
