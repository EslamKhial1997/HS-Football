const mongoose = require("mongoose");

const dbCollection = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log("Connected")).catch(()=> console.log("disConect DB");)
   
};

module.exports = dbCollection;