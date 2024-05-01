const { Router } = require("express");



const Routes = Router();
Routes.use("/:categoryId/question", RouetsQuestion);
Routes.route("/")
  .post(uploadImage, resizeImage,createCategoryValidator, createCategoriesService)
  .get(getAllCategories);
Routes.route("/:id")
  .get(getCategoryByIdValidator,getOneCategory)
  .put(uploadImage, resizeImage,updateCategoryValidation, updateOneCategory)
  .delete(deleteCategoryByIdValidator, deleteOneCategory);

module.exports = Routes;
