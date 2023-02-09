class ProductRepository{
    constructor(dao){
        this.dao = dao
    }

    async repoGetProductByName(name){
        try {
            const productByNameNoDto = await this.dao.getProductByName(name)
            if(!productByNameNoDto) return null
            return productByNameNoDto
        } catch (error) {
            throw error
            console.log("desde product repository", error);
        }
    }

    async repoGetProducts () {
        try {
            const products = await this.dao.getProducts()
            return products
        } catch (error) {
            throw error
            console.log("desde product repository", error);
        }
    }

    async repoGetProductById(id) {
        try {
            const product = await this.dao.getProductById(id)
            return product
        } catch (error) {
            throw error
            console.log("desde product repository", error);
        }
    }

    async repoDeleteProductById(id)  {
        try {
            const deletedProduct = await this.dao.deleteProductById(id)
            return deletedProduct
        } catch (error) {
            throw error
            console.log("desde product repository", error);
        }
    }

    async repoUpdateProductById(id, newProduct){
        try {
            const updatedProduct = await this.dao.updateProductById(id, newProduct)
            return updatedProduct
        } catch (error) {
            throw error
            console.log("desde product repository", error);
        }
    }

    async repoCreateProduct(productDto){
        try {
            const createdProductNoDto = await this.dao.createProduct(productDto)
            return createdProductNoDto
        } catch (error) {
            throw error
            console.log("desde product repository", error);
        }
    }
}

export {
    ProductRepository
}