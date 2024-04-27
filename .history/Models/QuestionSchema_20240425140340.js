const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema(
  {
    description: String,
    category: {
      type: mongoose.Schema.ObjectId,
      ref: "Category",
      require: [true, "Product Must Be belong To Category"],
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

const QuestionModel = mongoose.model("Question", QuestionSchema);
module.exports = QuestionModel;
