const { Router } = require("express");


const QuestionModel = require("../Models/QuestionSchema");
const { createQuestionService } = require("../Services/QuestionService");

const Routes = Router();

Routes.route("/")
  .post(createQuestionService)

module.exports = Routes;
