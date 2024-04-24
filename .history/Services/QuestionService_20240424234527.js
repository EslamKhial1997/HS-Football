const expressAsyncHandler = require("express-async-handler");
const QuestionModel = require("../Models/QuestionSchema");
const factory = require("./FactoryHandler");

exports.createQuestionService = expressAsyncHandler(async (req, res, next) => {
  const { description } = req.body;
  const { alternatives } = req.body;

  const question = await QuestionModel.create({
    description,
    alternatives,
  });
  await question.save();
  res.status(200).json({
    status: "success",

    data: question,
  });
});
exports.getQuestionService =expressAsyncHandler(async(req , res , next)=>{

})
// factory.getAll(QuestionModel);
