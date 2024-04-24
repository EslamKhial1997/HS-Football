const { Router } = require("express");
const {
  createBrands,
  getBrands,
  updateBrands,
  deleteBrands,
  getBrand,
  ImageProcess,
  UploadImageBrand,
} = require("../Services/BrandsService");

const QuestionModel = require("../Models/QuestionSchema");

const Routes = Router();

Routes.route("/")
  .post(QuestionModel)

module.exports = Routes;
