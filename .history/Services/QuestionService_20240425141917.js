const expressAsyncHandler = require("express-async-handler");
const QuestionModel = require("../Models/QuestionSchema");
const factory = require("./FactoryHandler");

exports.createQuestionService = expressAsyncHandler(async (req, res, next) => {
  const { description, alternatives ,category  } = req.body;
  

  const question = await QuestionModel.create({
    description,
    alternatives,
    category,
    sl
  });
  await question.save();
  res.status(200).json({
    status: "success",

    data: question,
  });
});
exports.getAllQuestionService = factory.getAll(QuestionModel);
exports.getOneQuestionService = factory.getOne(QuestionModel);
