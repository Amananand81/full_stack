import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({

    name : {
        type: String,
        required: true,
    },
    salary : {
        type: String,
        required: true,
    },
    qualification : {
        required : true,
        type : String,
    },
    exprienceInYears: {
        type : Number,
        default : 0
    },
    workInHospital : [
        {
            type : mongoose.Schema.Types.ObjectID,
            ref : "hospital"
        }
    ]

},{timestamps})

export const doctor = mongoose.model('doctor',doctorSchema)