const { Router } = require("express");


const { createQuestionService } = require("../Services/QuestionService");

const Routes = Router();

Routes.route("/")
  .post(createQuestionService).get(getQ)

module.exports = Routes;
