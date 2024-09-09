const mongoose = require('mongoose');

const user_Schema = new mongoose.Schema({
    username : String,
    email : String,
    password : String
})

const user_Table  = mongoose.model('user_Table',user_Schema)


module.exports = {
    user_Table
}
