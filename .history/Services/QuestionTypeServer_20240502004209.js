const { v4: uuidv4 } = require("uuid");

const expressAsyncHandler = require("express-async-handler");

const factory = require("./FactoryHandler");
const { UploadSingleImage } = require("../Middleware/UploadImageMiddleware");
const categoryModel = require("../Models/CategoriesSchema");
const sharp = require("sharp");




exports.createCategoriesService = factory.createOne(categoryModel);
exports.getAllCategories = factory.getAll(categoryModel);
exports.getOneCategory = factory.getOne(categoryModel);
exports.deleteOneCategory = factory.deleteOne(categoryModel);
exports.updateOneCategory = factory.updateOne(categoryModel);
