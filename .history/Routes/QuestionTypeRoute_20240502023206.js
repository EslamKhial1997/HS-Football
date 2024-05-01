const { Router } = require("express");
const {
  createQuestionTypeService,
  getAllQuestionType,
  getOneQuestionType,
  updateOneQuestionType,
  deleteOneQuestionType,
  uploadImage,
} = require("../Services/QuestionTypeServer");

const Routes = Router();

Routes.route("/").post(uploadImage,resize,createQuestionTypeService).get(getAllQuestionType);
Routes.route("/:id")
  .get(getOneQuestionType)
  .put(updateOneQuestionType)
  .delete(deleteOneQuestionType);

module.exports = Routes;
