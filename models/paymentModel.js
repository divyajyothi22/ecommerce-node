const mongoose = require('mongoose');

const dataTypes = mongoose.SchemaTypes;

const paymentSchema = new mongoose.Schema({
    userId: {
        type: dataTypes.ObjectId,
        required: true,
        ref: "paymentModel"
    },
    cartId: {
        type: dataTypes.ObjectId,
        required: true,
        ref: "paymentModel"
    },
    paymentId: {
        type: dataTypes.String,
        required: true
    },
    paymentStatus: {
        type: dataTypes.String,
        required: true
    },
   

})

module.exports = mongoose.model("paymentModel", paymentSchema)