const { Schema, model } = require("mongoose");


const questionTypeSchema = new Schema(
  {
    type: {
      type: String,
      required: [true, "require Question Type"],
      unique: [true, "product name Must be unique"],
      minlength: [3, "Name Too Short To Create"],
      maxlength: [32, "Name Too long To Create"],
    },
    image: {
      type: String,
    },
    slug: {
      type: String,
      lowercase: true,
    },
  }, 
  { timestamps: true }
);

const questionTypeModel =model("QuestionType", questionTypeSchema);

module.exports = questionTypeModel;
