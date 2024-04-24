const expressAsyncHandler = require("express-async-handler");
exports.createQuestion = expressAsyncHandler(async (req, res, next) => {
 
        const { description } = req.body
        const { alternatives } = req.body

        const question = await Question.create({
            description,
            alternatives
        })

        return res.status(201).json(question)

  
  });