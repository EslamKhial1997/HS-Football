

const factory = require("./FactoryHandler");

const categoryModel = require("../Models/CategoriesSchema");

const QuestionModel = require("../Models/QuestionSchema");

exports.createQuestionTypeService = factory.createOne(QuestionModel);
exports.getAllQuestionType = factory.getAll(QuestionModel);
exports.getOneQuestionType = factory.getOne(QuestionModel);
exports.deleteOneQuestionType = factory.deleteOne(QuestionModel);
exports.updateOneQuestionType = factory.updateOne(QuestionModel);
