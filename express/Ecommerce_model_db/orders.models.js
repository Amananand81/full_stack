import mongoose from 'mongoose'

const orderItemSchema = new mongoose.Schema({
    productId: {
        type : mongoose.Schema.Types.ObjectId,
        ref: "product",
    },
    quanity : {
        type: number,
        required : true
    }
})

const orderSchema = new mongoose.Schema({

    orderPrice : {
        type :Number,
        require : true,
    },
    customer : {
        type: mongoose.Schema.Types.ObjectId,
        required: user
    },
    orderItems : {
        type : [orderItemSchema]
    },
    address : {
        type : String,
        required: true,
    },
    status: {
        type: String,
        enum: ["pending","cancelled","delivered"],
        default: "pending"
    }

},{timestamps:true})

export const order = mongoose.model('order',orderSchema)