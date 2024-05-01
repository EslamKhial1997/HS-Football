const { Schema, model } = require("mongoose");

const QuestionSchema = new Schema(
  {
    description: String,
    category: [
      {
        type: Schema.ObjectId,
        ref: "Category",
        required: [true, "Question must belong to a Category"],
      },
    ],
    category: 
      {
        type: Schema.ObjectId,
        ref: "QuestionType",
        required: [true, "Question must belong to a Category"],
      },
    ,
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
QuestionSchema.pre(/^find/, function (next) {
  this.populate({
    path: "category",
    select: "name image",
  });
  next();
});
const QuestionModel = model("Question", QuestionSchema);
module.exports = QuestionModel;
