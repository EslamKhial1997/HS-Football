const expressAsyncHandler = require("express-async-handler");
const QuestionModel = require("../Models/QuestionSchema");
const factory = require("./FactoryHandler");

exports.createSubCategoryOnCategory = (req, res, next) => {
  if (!req.body.category) req.body.category = req.params.categoryId;
  next();
};
exports.createQuestionService = expressAsyncHandler(async (req, res, next) => {
  const { description, alternatives ,category  } = req.body;
  

  const question = await QuestionModel.create({
    description,
    alternatives,
    category,
    slug:description
  });
  await question.save();
  res.status(200).json({
    status: "success",

    data: question,
  });
});
exports.getAllQuestionService = factory.getAll(QuestionModel);
exports.getOneQuestionService = factory.getOne(QuestionModel);
