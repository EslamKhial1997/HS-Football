const expressAsyncHandler = require("express-async-handler");
const QuestionModel = require("../Models/QuestionSchema");
const factory = require("./FactoryHandler");
const sharp = require("sharp");
const { v4: uuidv4 } = require("uuid");
const { UploadSingleImage } = require("../Middleware/UploadImageMiddleware");

exports.resizeImage = expressAsyncHandler(async (req, res, next) => {
  if (req.file) {
    const filename = `question-${uuidv4()}-${Date.now()}.png`;
    await sharp(req.file.buffer)
      .resize(500, 500)
      .toFormat("png")
      .jpeg({ quality: 50 })
      .toFile(`uploads/question/${filename}`);
    req.body.image = filename;
  }
  next();
});

exports.uploadImage = UploadSingleImage("image");
exports.createQuestionOnCategory = (req, res, next) => {
  if (!req.body.category) req.body.category = req.params.categoryId;
  next();
};
 exports.createQuestionService = factory.createOne(QuestionModel);
exports.getAllQuestionService = factory.getAll(QuestionModel);
exports.getOneQuestionService = factory.getOne(QuestionModel);
exports.updateQuestionService = factory.updateOne(QuestionModel);
exports.deleteQuestionService = factory.deleteOne(QuestionModel);
