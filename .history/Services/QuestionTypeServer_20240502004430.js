const { v4: uuidv4 } = require("uuid");

const expressAsyncHandler = require("express-async-handler");

const factory = require("./FactoryHandler");
const { UploadSingleImage } = require("../Middleware/UploadImageMiddleware");
const categoryModel = require("../Models/CategoriesSchema");
const sharp = require("sharp");
const QuestionModel = require("../Models/QuestionSchema");

exports.createQuestionTypeService = factory.createOne(QuestionModel);
exports.getAllQuestionType = factory.getAll(QuestionModel);
exports.getOneQuestionType = factory.getOne(QuestionModel);
exports.deleteOneQuestionType = factory.deleteOne(QuestionModel);
exports.updateOneQuestionType = factory.updateOne(QuestionModel);
