const { Router } = require("express");

const { createCategoriesService, uploadImage } = require("../Services/CategoryService");

const Routes = Router();

Routes.route("/").post(  uploadImage,
  resiz,createCategoriesService)
// Routes.route("/:id").get(getOneQuestionService)

module.exports = Routes;