const { Router } = require("express");


const QuestionModel = require("../Models/QuestionSchema");

const Routes = Router();

Routes.route("/")
  .post(QuestionModel)

module.exports = Routes;
