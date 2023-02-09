import { v4 as uuidv4 } from 'uuid';
import {Product} from '../../model/product/model/Product.model.js'

class ProductService{
    constructor(repository){
        this.productRepository = repository
    }

    async getProducts (){
        try {
            const products = await this.productRepository.repoGetProducts();
            return products;
        } catch (error) {
            console.log("desde producto service", error);
            throw error
        }
    }

    async getProductById(id) {
        try {
            const productNoDto = await this.productRepository.repoGetProductById(id);
            if(!productNoDto) throw {msg: "No se encontro un producto con ese ID"}
            const product = new Product(productNoDto)
            return product.convertToDTO()
        } catch (error) {
            console.log("desde producto service", error);
            throw error
        }
    }

    async deleteProductById(id) {
        try {
            const productNoDto = await this.productRepository.repoGetProductById(id);
            if(!productNoDto) throw {msg: "No se encontro un producto con ese ID"}

            const deletedProduct = await this.productRepository.repoDeleteProductById(id);
            const deletedProductNoDto = new Product(productNoDto)
            return {
                product: deletedProductNoDto.convertToDTO(),
                data: deletedProduct
            }
        } catch (error) {
            console.log("desde producto service", error);
            throw error
        }
    }

    async updateProductById(id, body){
        try {
            const productByIdNoDto = await this.productRepository.repoGetProductById(id);
            if(!productByIdNoDto) throw {msg: "No se encontro un producto con ese ID"}

            const newProduct = new Product(body)
            const updatedProductNoDto = await this.productRepository.repoUpdateProductById(id, newProduct.convertToDTO())
            if(!updatedProductNoDto) throw {msg: "No se pudo actualizar el product"}
            const newUpdatedProduct = new Product(updatedProductNoDto)
            return newUpdatedProduct.convertToDTO()
        } catch (error) {
            console.log("desde producto service", error);
            throw error
        }
    }

    async createProduct(body) {
        try {
            const existProductByName = await this.productRepository.repoGetProductByName(body.name)
            if(existProductByName != null) throw {msg: "Ya existe un producto con ese nombre"}

            const productNoDto = new Product({
                id: uuidv4(),
                ...body
            })

            const createdProduct = await this.productRepository.repoCreateProduct(productNoDto.convertToDTO())
            const newProduct = new Product(createdProduct)
            return newProduct.convertToDTO()
        } catch (error) {
            console.log("desde producto service", error);
            throw error
        }
    }
}

export {
    ProductService
}