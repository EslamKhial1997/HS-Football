const { Schema, model } = require("mongoose");

const questionTypeSchema = new Schema(
  {
    type: {
      type: String,
      enum: ["عادي", "اختياري", "صح وخطأ"],
      default: "عادي",
    },
    slug: {
      type: String,
      lowercase: true,
    },
  },
  { timestamps: true }
);
const ImageURL = (doc) => {
  if (doc.image) {
    const image = `${process.env.HOST_NAME}/questionType/${doc.image}`;
    doc.image = image;
  }
};
QuestionSchema.post("init", (doc) => {
  ImageURL(doc);
});
QuestionSchema.post("save", (doc) => {
  ImageURL(doc);
});
const questionTypeModel = model("QuestionType", questionTypeSchema);

module.exports = questionTypeModel;
