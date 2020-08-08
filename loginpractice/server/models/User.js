const mongoose =require('mongoose');

const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        min:5
    },
    username:{
        type:String,
        required:true,
        min:3
    },
    password:{
        type:String,
        required:true,
        min:3
    }
});
const User = module.exports = mongoose.model('User',userSchema);
