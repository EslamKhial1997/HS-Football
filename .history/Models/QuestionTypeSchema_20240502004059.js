const { Schema, model } = require("mongoose");


const questionTypeSchema = new Schema(
  {
    type: {
      type: String,
      enum: ["عادي", "اختياري" , "صح وخطأ"],
      default: "عادي",
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
