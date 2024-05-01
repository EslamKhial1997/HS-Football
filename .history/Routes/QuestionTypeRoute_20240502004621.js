const { Router } = require("express");
const { createQuestionTypeService } = require("../Services/QuestionTypeServer");
const { getAllQuestionService } = require("../Services/QuestionService");



const Routes = Router();


Routes.route("/")
  .post(createQuestionTypeService)
  .get(getAllQuestionService);
Routes.route("/:id")
  .get(getCategoryByIdValidator,getOneCategory)
  .put(uploadImage, resizeImage,updateCategoryValidation, updateOneCategory)
  .delete(deleteCategoryByIdValidator, deleteOneCategory);

module.exports = Routes;
