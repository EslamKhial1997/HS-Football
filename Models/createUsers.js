const mongoose = require("mongoose");

const createUsers = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Required Name User"],
      minlength: [3, "Name Too Short To Create"],
      maxlength: [32, "Name Too long To Create"],
    },
    slug: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Required E-mail User"],
      trim: true,
      unique: [true, "E-mail Must Be Unique"],
    },
    password: {
      type: String,
      required: [true, "Required Password User"],
      minlength: [6, "Password Too Short To Create"],
    },
    phone: {
      type: Number,
    },
    imageProfile: {
      type: String,
    },
    role: {
      type: String,
      enum: ["admin", "manger", "user"],
      default: "admin",
    },

   
  },
  { timestamps: true }
);

const ImageURL = (doc) => {
  if (doc.image && !doc.image.includes(`${process.env.SERVER_IP}/users`)) {
    const image = `${process.env.BASE_URL}/users/${doc.imageProfile}`;
    doc.imageProfile = image;
  }
};
createUsers.post("init", (doc) => {
  ImageURL(doc);
});
createUsers.post("save", (doc) => {
  ImageURL(doc);
});

const createUsersModel = mongoose.model("Users", createUsers);
module.exports = createUsersModel;
