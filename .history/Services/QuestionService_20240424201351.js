const expressAsyncHandler = require("express-async-handler");
const QuestionModel = require("../Models/QuestionSchema");
exports.createQuestion = expressAsyncHandler(async (req, res, next) => {
 
        const { description } = req.body
        const { alternatives } = req.body

        const question = await QuestionModel.create({
            description,
            alternatives
        })

        return res.status(201).json(question)

  
  });