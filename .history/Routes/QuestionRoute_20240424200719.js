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

const Routes = Router();

Routes.route("/")
  .post(Ques)
  .get(getBrands);

module.exports = Routes;
