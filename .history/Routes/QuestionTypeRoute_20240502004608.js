const { Router } = require("express");



const Routes = Router();


Routes.route("/")
  .post(createQues)
  .get(getAllCategories);
Routes.route("/:id")
  .get(getCategoryByIdValidator,getOneCategory)
  .put(uploadImage, resizeImage,updateCategoryValidation, updateOneCategory)
  .delete(deleteCategoryByIdValidator, deleteOneCategory);

module.exports = Routes;