const { Schema, model } = require("mongoose");

const QuestionSchema = new Schema(
  {
    description: String,
    category:{
      type: Schema.ObjectId,
      required: ["Category id must be provided"]
    },
    alternatives: [
      {
        answer: {
          type: String,
          required: true,
        },
        isCorrect: {
          type: Boolean,
          required: true,
          default: false,
        },
      },
    ],
    slug: {
        type: String,
        lowercase: true,
      },
  },
  { timestamps: true }
);

const QuestionModel = model("Question", QuestionSchema);
module.exports = QuestionModel;
