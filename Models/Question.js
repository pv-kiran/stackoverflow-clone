const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    user : {
        type: Schema.Types.ObjectId,
        ref: 'appUser',
        required: true
    } ,
    name: {
        type: String,
        required: true
    } ,
    question : {
        type: String ,
        required: true
    } ,
    code : {
        type: String ,
        required: true
    } ,
    date: {
        type: Date,
        default: Date.now()
    } ,
    answer: [
        {
            user: {
                type: Schema.Types.ObjectId ,
                ref: 'appUser',
                required: true
            } ,
            answer: {
                type: String,
                required: true
            } ,
            date: {
                type: Date,
                default: Date.now()
            }
        }
    ] ,
    upvotes: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref:'myPerson'
            }
        }
    ] 
})

const Question = mongoose.model('questions',questionSchema);
module.exports = Question;