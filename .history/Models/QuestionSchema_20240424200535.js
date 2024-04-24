const { Schema, model } = require("mongoose")


const QuestionSchema = new Schema({
    description: String,
    alternatives: [
        {
            text: {
                type: String,
                required: true
            },
            isCorrect: {
                type: Boolean,
                required: true,
                default: false
            }
        }
    ]
})

module.exports = model('Question', QuestionSchema)
