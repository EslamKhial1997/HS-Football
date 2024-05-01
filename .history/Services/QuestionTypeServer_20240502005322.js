const factory = require("./FactoryHandler");
const QuestionModel = require("../Models/QuestionSchema");

exports.createQuestionTypeService = factory.createOne(Ques);
exports.getAllQuestionType = factory.getAll(QuestionModel);
exports.getOneQuestionType = factory.getOne(QuestionModel);
exports.deleteOneQuestionType = factory.deleteOne(QuestionModel);
exports.updateOneQuestionType = factory.updateOne(QuestionModel);