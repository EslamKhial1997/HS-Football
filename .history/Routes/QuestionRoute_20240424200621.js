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
  .post(UploadImageBrand, ImageProcess, createBrandsValidator, createBrands)
  .get(getBrands);
Routes.route("/:id")
  .get(getBrandsByIdValidator, getBrand)
  .put(UploadImageBrand, ImageProcess, updateBrandsValidator, updateBrands)
  .delete(deleteBrandsByIdValidator, deleteBrands);
module.exports = Routes;
