const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

const taskSchema = new mongoose.Schema({
    description:{
        type: String,
        required:true,
        trim:true
    },name : {
        type: String,
        required:true,
        trim:true
    },age:{
        type:Number,
        default:0,
        validate(value){
            if(value<0){
                throw new Error('Age must be in positive.')
            }
        }
    }, email:{
        type : String,
        required : true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    }, password:{
        type:String,
        required:true,
        minlength:7,
        ttrim:true,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('password can not contin "password"')
            }
        }
    },completed:{
        type: Boolean,
        default:false
    }
})


taskSchema.pre('save',async function(next){
    const task = this

    if (task.isModified('password')){
        task.password = await bcrypt.hash(task.password,8)
    }

    next()
})

const Task = mongoose.model('Task',taskSchema)

module.exports = Task