const { Schema, model } = require("mongoose")


const QuestionSchema = new Schema({
    description: String,
    alternatives: [
        {
            answer: {
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

const = model('Question', QuestionSchema)
