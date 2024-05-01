const { Schema, model } = require("mongoose");


const questionTypeSchema = new Schema(
  {
    type: {
      type: String,
      required: [true, "require Question Type"],
    },
    en
    slug: {
      type: String,
      lowercase: true,
    },
  }, 
  { timestamps: true }
);

const questionTypeModel =model("QuestionType", questionTypeSchema);

module.exports = questionTypeModel;
