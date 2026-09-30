import mongoose from 'mongoose'

const productSchema= new mongoose.Schema({
    description: {
        type:String,
        require:true,
    },
    name : {
        type:String,
        require:true
    },
    productImage: {
        type: String,
    },
    price : {
        type: Number,
        default: 0
    },
    stock : {
        default : 0,
        type : Number,
    },
    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "category",
        required : true

    },
    owner : {
        type : mongoose.Schema.Types.objectId,
        ref:"user"
    }
},{timestamp:true})

export const product=mongoose.model('product',productSchema)