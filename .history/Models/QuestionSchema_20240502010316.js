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
    questionType: {
      type: Schema.ObjectId,
      ref: "QuestionType",
      required: [true, "Question must belong to a Category"],
    },
    image: {
      type: String,
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
const ImageURL = (doc) => {
  if (doc.image) {
    const image = `${process.env.HOST_NAME}/categories/${doc.image}`;
    doc.image = image;
  }
};
categorySchema.post("init", (doc) => {
  ImageURL(doc);
});
categorySchema.post("save", (doc) => {
  ImageURL(doc);
});
QuestionSchema.pre(/^find/, function (next) {
  this.populate({
    path: "category",
    select: "name image",
  });
  next();
});
QuestionSchema.pre(/^find/, function (next) {
  this.populate({
    path: "questionType",
    select: "type",
  });
  next();
});
const QuestionModel = model("Question", QuestionSchema);
module.exports = QuestionModel;
