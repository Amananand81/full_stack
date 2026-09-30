import mongoose from 'mongoose'

const patientSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true
    },
    diagonsedWith: {
        type : String,
        required:true
    },
    address : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required: true
    },
    bloodGroup: {
        type: String,
        required : true
    },
    gender : {
        type : String,
        enum : ['male',"female","other"],
        required : true
    },
    admittedIn: {
        type : mongoose.Schema.Type.ObjectId,
        ref : 'hospital'
    }
},{timestamps})

export const patient = mongoose.model('patient',patientSchema)