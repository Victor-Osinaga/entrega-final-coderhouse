class CartRepository{
    constructor(dao){
        this.dao = dao
    }

    async repoGetCartById (id) {
        try {
            const cart = await this.dao.getCartById(id)
            return cart
        } catch (error) {
            console.log("desde cart repository", error);
            throw error
        }
    }

    async repoUpdateCart(cart){
        try {
            const updatedCart = await this.dao.updateCart(cart)
            return updatedCart
        } catch (error) {
            console.log("desde cart repository", error);
            throw error
        }
    }

    async repoDeleteProductFromCart(cart){
        try {
            if(cart.products.length <= 0){
                const deletedCart = await this.dao.deleteCartById(cart.id)
                return deletedCart
            }else{
                const updatedCart = await this.dao.updateCart(cart)
                return updatedCart
            }
            
        } catch (error) {
            console.log("desde cart repository", error);
            throw error
        }
    }

    async repoCreateCart(newCartDto){
        try {
            const createdCart = await this.dao.createCart(newCartDto)
            return createdCart
        } catch (error) {
            console.log("desde cart repository", error);
            throw error
        }
    }

    async repoGetCarts(){
        const carts = await this.dao.getCarts()
        return carts
    }
}

export {
    CartRepository
}