const expressAsyncHandler = require("express-async-handler");
const QuestionModel = require("../Models/QuestionSchema");
const factory = require("./FactoryHandler");
const sharp = require("sharp");
const { v4: uuidv4 } = require("uuid");
const { UploadSingleImage } = require("../Middleware/UploadImageMiddleware");

exports.resizeImage = expressAsyncHandler(async (req, res, next) => {
  if (req.file) {
    const filename = `category-${uuidv4()}-${Date.now()}.png`;
    await sharp(req.file.buffer)
      .resize(1500, 1500)
      .toFormat("jpeg")
      .jpeg({ quality: 80 })
      .toFile(`uploads/categories/${filename}`);
    req.body.image = filename;
   
  }
  next();
});

exports.uploadImage = UploadSingleImage("image");
exports.createQuestionOnCategory = (req, res, next) => {
  if (!req.body.category) req.body.category = req.params.categoryId;
  next();
};
exports.createQuestionService = expressAsyncHandler(async (req, res, next) => {
  const { description, alternatives, category } = req.body;

  const question = await QuestionModel.create({
    description,
    alternatives,
    category,
    slug: description,
  });
  await question.save();
  res.status(200).json({
    status: "success",

    data: question,
  });
});
exports.getAllQuestionService = factory.getAll(QuestionModel);
exports.getOneQuestionService = factory.getOne(QuestionModel);
exports.updateQuestionService = factory.updateOne(QuestionModel);
exports.deleteQuestionService = factory.deleteOne(QuestionModel);
