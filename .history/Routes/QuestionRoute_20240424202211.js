const { Router } = require("express");


const QuestionModel = require("../Models/QuestionSchema");
const { createQuestion } = require("../Services/QuestionService");

const Routes = Router();

Routes.route("/")
  .post(createQuestion)

module.exports = Routes;
