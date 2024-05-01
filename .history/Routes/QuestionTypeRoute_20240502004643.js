const { Router } = require("express");
const { createQuestionTypeService } = require("../Services/QuestionTypeServer");
const { getAllQuestionService, getOneQuestionService } = require("../Services/QuestionService");



const Routes = Router();


Routes.route("/")
  .post(createQuestionTypeService)
  .get(getAllQuestionService);
Routes.route("/:id")
  .get(getOneQuestionService)
  .put( updateQuest)
  .delete(deleteCategoryByIdValidator, deleteOneCategory);

module.exports = Routes;
