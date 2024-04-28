const { Router } = require("express");

const {
  createCategoriesService,
  uploadImage,
  resizeImage,
  getAllCategories,
  updateOneCategory,
  deleteOneCategory,
  getOneCategory,
} = require("../Services/CategoryService");
const RouetsQuestion = require("./QuestionRoute");
const {
  deleteCategoryByIdValidator,
  createCategoryValidator,
  getCategoryByIdValidator,
} = require("../Resuble/CategoryValidation");
const Routes = Router();
Routes.use("/:categoryId/question", RouetsQuestion);
Routes.route("/")
  .post(uploadImage, resizeImage,createCategoryValidator, createCategoriesService)
  .get(getAllCategories);
Routes.route("/:id")
  .get(getQat,getOneCategory)
  .put(uploadImage, resizeImage, updateOneCategory)
  .delete(deleteCategoryByIdValidator, deleteOneCategory);

module.exports = Routes;
