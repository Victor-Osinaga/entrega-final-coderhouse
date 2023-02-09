import { Schema } from "mongoose"

const productSchema = new Schema({
    id: {type: String},
    name: {type: String, required: true/*, max: 10*/},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    image: {type: String, required: true},
})

export {
    productSchema
}