import { Schema } from "mongoose"

const productCartSchema = new Schema({
    id: {type: String},
    name: {type: String, required: true/*, max: 10*/},
    quantity: {type: Number, required: true},
    price: {type: Number, required: true},
    image: {type: String, required: true},
})

export {
    productCartSchema
}