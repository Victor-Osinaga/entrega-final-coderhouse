import { Schema } from "mongoose"

const orderSchema = new Schema({
    id: {type: String},
    idCliente: {type: String},
    timestamp: {type: String},
    products: {type: Array, required: true/*, max: 10*/}
})

export {
    orderSchema
}