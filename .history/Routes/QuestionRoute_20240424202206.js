const { Router } = require("express");


const QuestionModel = require("../Models/QuestionSchema");

const Routes = Router();

Routes.route("/")
  .post(createQuestion)

module.exports = Routes;
