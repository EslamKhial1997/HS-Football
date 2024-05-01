const { Schema, model } = require("mongoose");


const questionTypeSchema = new Schema(
  {
    type: {
      type: String,
      enum: ["active", "inactive"],
      default: "inactive",
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
