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
const {
  createBrandsValidator,
  getBrandsByIdValidator,
  updateBrandsValidator,
  deleteBrandsByIdValidator,
} = require("../Resuble/BrandsValidatorError");
const QuestionModel = require("../Models/QuestionSchema");

const Routes = Router();

Routes.route("/")
  .post(QuestionModel)
  .get(getBrands);

module.exports = Routes;
