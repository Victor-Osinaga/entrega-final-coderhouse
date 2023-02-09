import mongoose from "mongoose";
mongoose.set('strictQuery', false);

export default class CartMongo{
    constructor(collection, schema, url){
        mongoose.connect(url);
        this.collection = mongoose.model(collection, schema);
    }
    async getCartById(id){
        const cart = await this.collection.findOne({id: id}, { _id: 0, __v: 0 }).lean();
        return cart
    }

    async createCart(newCartDto){
        const newCart = new this.collection(newCartDto)
        const savedNewCart = await newCart.save(newCartDto)

        if(!savedNewCart) throw {msg: "Error en BD al crear el CART"}
        
        return await this.collection.findOne({id : newCartDto.id}, { _id: 0, __v: 0 }).lean();
    }

    async updateCart(cart){
        const update = await this.collection.updateOne(
            { id: cart.id },
            {
              $set: {
                id: cart.id,
                products: cart.products
              },
            }
        );
        return await this.collection.findOne({ id: cart.id }, { _id: 0, __v: 0 }).lean();
    }

    async deleteCartById(cartId){
        return await this.collection.deleteOne({ id: cartId });
    }

    async getCarts(){
        return await this.collection.find({}, { _id: 0, __v: 0 }).lean()
    }
}