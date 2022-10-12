const mongoose = require('mongoose')

const userModel = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    role:{
        type:String,
        enum:['admin','buyer','seller'],
        default:'buyer'
    },
    resettoken:{
        type:String,
        default:''
    },
    isverifiedemail:{
        type:Boolean,
        default:false
    },
    verifyemailtoken:{
        type:String,
    },
    createdat:{
        type:Date,
        default:Date.now
    }

})

const User = mongoose.model('Users',userModel)

module.exports = User