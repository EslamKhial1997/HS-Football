const { Router } = require("express");
const { createQuestionTypeService, getAllQuestionType } = require("../Services/QuestionTypeServer");


const Routes = Router();

Routes.route("/").post(createQuestionTypeService).get(getAllQuestionType);
Routes.route("/:id")
  .get(getOneQue)
  .put(updateQuestionService)
  .delete(deleteQuestionService);

module.exports = Routes;
