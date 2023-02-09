import mongoose from "mongoose";
mongoose.set('strictQuery', false);

export default class ProductMongo{
    constructor(collection, schema, url){
        mongoose.connect(url);
        this.collection = mongoose.model(collection, schema);
    }

    async getProducts() {
        return await this.collection.find({}, { _id: 0, __v: 0 }).lean();
    }

    async getProductByName(name) {
        return await this.collection.findOne({name: name}, { _id: 0, __v: 0 }).lean();
    }

    async getProductById(id) {
        return await this.collection.findOne({ id: id }, { _id: 0, __v: 0 }).lean();
    }

    async deleteProductById(id) {
        return await this.collection.deleteOne({ id: id });
    }

    async updateProductById(id, newProduct){
        const update = await this.collection.updateOne(
            { id: id },
            {
              $set: {
                id: id,
                name: newProduct.name,
                description: newProduct.description,
                price: newProduct.price,
                image: newProduct.image
              },
            }
          );
          return await this.collection.findOne({ id: id }, { _id: 0, __v: 0 }).lean();
    }

    async createProduct(productDto) {
        try {
            const product = new this.collection(productDto)
            const savedProduct = await product.save(productDto)
            if(!savedProduct) throw {msg: "Error en BD al crear el producto"}
            return await this.collection.findOne({id : productDto.id}, { _id: 0, __v: 0 }).lean();
        } catch (error) {
            throw error
        }
        
    }
}