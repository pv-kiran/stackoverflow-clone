// Setting up the User Schema for registration and login
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String ,
        required: true
    } ,
    email: {
        type: String ,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ , 'Please provide a valid email']
    } ,
    password: {
        type: String ,
        required: true,
        minlength:[5,'Password should contain atleast 5 characters']
    } 
})


const User = mongoose.model('appUser', userSchema);
module.exports = User;
