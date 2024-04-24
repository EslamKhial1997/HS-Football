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

const QuestionModel = model('Question', QuestionSchema)
const CreateUsers = mongoose.model("User", createUserModel);
