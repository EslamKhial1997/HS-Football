const { Schema, model } = require("mongoose");


const questionTypeSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "require Category"],
      unique: [true, "product name Must be unique"],
      minlength: [3, "Name Too Short To Create"],
      maxlength: [32, "Name Too long To Create"],
    },
    image: {
      type: String,
    },
    slug: {
      type: String,
      lowercase: true,
    },
  }, 
  { timestamps: true }
);

categorySchema.post("init", (doc) => {
  ImageURL(doc);
});
categorySchema.post("save", (doc) => {
  ImageURL(doc);
});
const questionTypeModel =model("QuestionType", questionTypeSchema);

module.exports = questionTypeModel;
