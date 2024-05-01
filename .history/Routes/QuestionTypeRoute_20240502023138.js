const { Router } = require("express");
const {
  createQuestionTypeService,
  getAllQuestionType,
  getOneQuestionType,
  updateOneQuestionType,
  deleteOneQuestionType,
} = require("../Services/QuestionTypeServer");

const Routes = Router();

Routes.route("/").post(وcreateQuestionTypeService).get(getAllQuestionType);
Routes.route("/:id")
  .get(getOneQuestionType)
  .put(updateOneQuestionType)
  .delete(deleteOneQuestionType);

module.exports = Routes;
