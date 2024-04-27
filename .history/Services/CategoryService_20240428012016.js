const { v4: uuidv4 } = require("uuid");

const expressAsyncHandler = require("express-async-handler");

const factory = require("./FactoryHandler");
const { UploadSingleImage } = require("../Middleware/UploadImageMiddleware");
const categoryModel = require("../Models/CategoriesSchema");
const sharp = require("sharp");
const ApiError = require("../Resuble/ApiError");

exports.resizeImage = expressAsyncHandler(async (req, res, next) => {
  if (req.file) {
    const filename = `category-${uuidv4()}-${Date.now()}.jpeg`;
    await sharp(req.file.buffer)
      .resize(2000, 1333)
      .toFormat("jpeg")
      .jpeg({ quality: 95 })
      .toFile(`uploads/categories/${filename}`);
    req.body.image = filename;
   
  }
  next();
});

exports.uploadImage = UploadSingleImage("image");
exports.createCategoriesService = factory.createOne(categoryModel);
exports.getAllCategories = factory.getAll(categoryModel);
exports.getOneCategory = factory.getOne(categoryModel);
exports.deleteOneCategory = factory.deleteOne(categoryModel);
exports.updateOneCategory =  expressAsyncHandler(async (req, res, next) => {
  console.log(req.params.id);
  const updateDocById = await categoryModel.findByIdAndUpdate(
    req.params.id,
    req.body.image === "" ? { $set: { name: req.body.name } } : req.body,

    { new: true }
  );

  if (!updateDocById)
    next(
      new ApiError(
        `Sorry Can't Update This ID From ID :${req.params.id}`,
        404
      )
    );
   
  updateDocById.save();
  res.status(200).json({ data: updateDocById });
});
