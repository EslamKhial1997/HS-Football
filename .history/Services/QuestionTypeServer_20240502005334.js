const factory = require("./FactoryHandler");
const QuestionModel = require("../Models/QuestionSchema");
const questionTypeModel = require("../Models/QuestionTypeSchema");

exports.createQuestionTypeService = factory.createOne(questionTypeModel);
exports.getAllQuestionType = factory.getAll(questionTypeModel);
exports.getOneQuestionType = factory.getOne(questionTypeModel);
exports.deleteOneQuestionType = factory.deleteOne(questionTypeModel);
exports.updateOneQuestionType = factory.updateOne(questionTypeModel);
