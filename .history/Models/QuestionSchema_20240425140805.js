const { Schema, model } = require("mongoose");

const QuestionSchema = new Schema(
  {
    description: String,
    category: {
      type: Schema.ObjectId,
      ref: "category",
      required: [true, "Question must belong to a Category"],
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