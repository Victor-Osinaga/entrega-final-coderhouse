import { Schema } from "mongoose"

const cartSchema = new Schema({
    id: {type: String},
    products: {type: Array, required: true/*, max: 10*/}
})

export {
    cartSchema
}