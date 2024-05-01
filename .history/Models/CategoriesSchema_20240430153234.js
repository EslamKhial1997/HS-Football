const { Schema, model } = require("mongoose");


const categorySchema = new Schema(
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
const categoryModel =model("Category", categorySchema);

module.exports = categoryModel;
