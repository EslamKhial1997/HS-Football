const { Router } = require("express");
const { createQuestionTypeService, getAllQuestionType, getOneQuestionType, updateOneQuestionType } = require("../Services/QuestionTypeServer");


const Routes = Router();

Routes.route("/").post(createQuestionTypeService).get(getAllQuestionType);
Routes.route("/:id")
  .get(getOneQuestionType)
  .put(updateOneQuestionType)
  .delete(deleteQuestionService);

module.exports = Routes;
