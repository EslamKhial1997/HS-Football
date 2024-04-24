const { Schema, model } = require("mongoose");

const QuestionSchema = new Schema(
  {
    description: String,
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
  },
  { time: true }
);

const QuestionModel = model("Question", QuestionSchema);
module.exports = QuestionModel;
