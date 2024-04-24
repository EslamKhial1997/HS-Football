const { Router } = require("express");

const { createCategoriesService } = require("../Services/CategoryService");

const Routes = Router();

Routes.route("/").post(  uploa,
  resizeImage,createCategoriesService)
// Routes.route("/:id").get(getOneQuestionService)

module.exports = Routes;
