const { v4: uuidv4 } = require("uuid");

const expressAsyncHandler = require("express-async-handler");

const factory = require("./FactoryHandler");
const { UploadSingleImage } = require("../Middleware/UploadImageMiddleware");
const categoryModel = require("../Models/CategoriesSchema");
const sharp = require("sharp");

exports.createQuestionTypeService = factory.createOne(create);
exports.getAllQuestionType = factory.getAll(categoryModel);
exports.getOneQuestionType = factory.getOne(categoryModel);
exports.deleteOneQuestionType = factory.deleteOne(categoryModel);
exports.updateOneQuestionType = factory.updateOne(categoryModel);
