import mongoose from "mongoose";
mongoose.set('strictQuery', false);

export default class OrderMongo{
    constructor(collection, schema, url){
        mongoose.connect(url);
        this.collection = mongoose.model(collection, schema);
    }

    async createOrder(newOrderDto){
        const newOrder = new this.collection(newOrderDto)
        const savedNewOrder = await newOrder.save(newOrderDto)

        if(!savedNewOrder) throw {msg: "Error en BD al crear ORDER"}
        
        return await this.collection.findOne({id : newOrderDto.id}, { _id: 0, __v: 0 }).lean();
    }

    async getOrders(id){
        const orders = await this.collection.find({idCliente : id}, { _id: 0, __v: 0 }).lean()
        return orders
    }
}