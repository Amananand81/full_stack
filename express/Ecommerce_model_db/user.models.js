import mongoose  from 'mongoose'

const userSchema=new mongoose.Schema({
    username:{
        type: String,
        required:true,
        unique:true,
        lowercase:true
    },
    email:{
        type:string,
        require:true,
        unqiue:true,
        lowercase:true
    },
    possword:{
        type:string,
        require:true
    }
},{timestamps:true})

export const user = mongoose.model("user",userSchema);