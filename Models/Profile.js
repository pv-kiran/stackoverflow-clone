const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'appUser'
    } ,
    username: {
        type: String,
        required: [true, 'Please provide a valid username']
    },
    website: {
        type: String 
    } ,
    country: {
        type: String,
        required: [true, 'Please provide a country']
    } ,
    proagramminglang: {
        type: [String] ,
        required: [true, 'Please provide a programing languages that you are comfortable with']
    } ,
    portfolio: {
        type: String
    } ,
    social: {
        youtube: {
            type: String
        } ,
        instagram: {
            type: String
        } ,
        linkedin: {
            type: String
        }
    } ,
    workrole: [
       {
           role: {
               type: String,
               required: [true, 'Please provide your position in this organization']
           } ,
           company: {
               type: String,
               required: [true, 'Please provide name of the organization']
           } ,
           country: {
               type: String
           } ,
           from : {
               type: Date
           } ,
           to: {
               type: Date
           } ,
           current : {
               type: Boolean,
           } ,
           details: {
               type: String
           }
       }
    ] ,
    date : {
        type: Date,
        default: Date.now()
    }
})

const Profile = mongoose.model('userProfile', profileSchema);
module.exports = Profile;