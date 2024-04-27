const { Router } = require("express");

const {
  createQuestionService,
  getOneQuestionService,
  getAllQuestionService,
  createQuestionOnCategory,
} = require("../Services/QuestionService");
const { QuestionValidation } = require("../Resuble/QuestionValidation");

const Routes = Router({ mergeParams: true });

Routes.route("/").post(createQuestionOnCategory,QuestionValidation ,createQuestionService).get(getAllQuestionService);
Routes.route("/:id").get(getOneQuestionService)
Routes.route("/:id").get(getOneCategory)
Routes.route("/:id").patch(updateOneCategory).delete(deleteOneCategory)

module.exports = Routes;
