const factory = require("./FactoryHandler");
const QuestionModel = require("../Models/QuestionSchema");
const questionTypeModel = require("../Models/QuestionTypeSchema");

exports.createQuestionTypeService = factory.createOne(questionTypeModel);
exports.getAllQuestionType = factory.getAll(questionTypeModel);
exports.getOneQuestionType = factory.getOne(QuestionModel);
exports.deleteOneQuestionType = factory.deleteOne(QuestionModel);
exports.updateOneQuestionType = factory.updateOne(QuestionModel);
