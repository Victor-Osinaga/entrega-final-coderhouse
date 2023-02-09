import { v4 as uuidv4 } from 'uuid';
import { Cart } from '../../model/cart/model/Cart.model.js'
import { ProductCart } from '../../model/cart/model/productCart.model.js';
import { productService } from '../product/product.factory.js';

class CartService {
    constructor(repository) {
        this.cartRepository = repository
    }

    async getProductsFromCart(id) {
        try {
            const cart = await this.cartRepository.repoGetCartById(id);
            if (!cart) {
                console.log("NO hay cart", cart);
                const newCartNoDto = new Cart({ id: id, products: [] })
                const createdCart = await this.cartRepository.repoCreateCart(newCartNoDto.convertToDTO())
                const createdCartNoDto = new Cart(createdCart)
                console.log("cart creado", createdCartNoDto.convertToDTO());
                return createdCartNoDto.convertToDTO();
            } else {
                console.log("SI hay cart", cart);
                return cart
            }
        } catch (error) {
            console.log("desde cart service", error);
            throw error
        }
    }

    async deleteProductsFromCart(id){
        try {
            const cart = await this.cartRepository.repoGetCartById(id);
            if (!cart) throw {msg: "No existe el ID de ese carrito"}
            cart.products = []
            const cartDto = new Cart(cart).convertToDTO()

            return await this.cartRepository.repoUpdateCart(cartDto)
        } catch (error) {
            console.log("desde cart service", error);
            throw error
        }
    }

    async createProductToCart(id_cart, id_product) {
        try {
            const cart = await this.cartRepository.repoGetCartById(id_cart);
            const productToAddDto = await productService.getProductById(id_product)

            if (!productToAddDto) throw { msg: "No existe el producto con ese ID para eliminar" }

            if (!cart) {
                console.log("No existe carrito con ese id, creando y añadiendo producto");
                const newCartNoDto = new Cart({ id: id_cart, products: [] })
                const createdCartNoDto = await this.cartRepository.repoCreateCart(newCartNoDto.convertToDTO())
                
                const productCart = new ProductCart({ quantity: 1, ...productToAddDto })
                createdCartNoDto.products.push(productCart.convertToDTO())

                return await this.cartRepository.repoUpdateCart(new Cart(createdCartNoDto).convertToDTO())
            }

            const cartDto = new Cart(cart).convertToDTO()

            const prodInCart = cartDto.products.find((product) => product.id == id_product)
            if(!prodInCart){
                console.log("Producto no encontrado en el carrito");
                const productCart = new ProductCart({ quantity: 1, ...productToAddDto })
                cart.products.push(productCart.convertToDTO())
                
                return await this.cartRepository.repoUpdateCart(cart)
            }else{
                console.log("Producto encontrado en el carrito, sumando quantity");
                const index = cartDto.products.findIndex(prod => prod.id == id_product)
                cart.products[index].quantity++

                return await this.cartRepository.repoUpdateCart(cart)
            }
        } catch (error) {
            console.log("desde cart service", error);
            throw error
        }
    }

    async deleteProductFromCart(id_cart, id_product){
        try {
            const cart = await this.cartRepository.repoGetCartById(id_cart);
            if (!cart) throw {msg: "No existe el ID de ese carrito"}

            const productToAddDto = await productService.getProductById(id_product)
            if (!productToAddDto) throw { msg: "No existe el producto con ese ID para eliminar" }
            
            const cartDto = new Cart(cart).convertToDTO()

            const prodInCart = cartDto.products.find((product) => product.id == id_product)
            if(!prodInCart) {
                throw {msg: "No existe ese producto en el carrito"}
            }else{
                console.log("Producto encontrado en el carrito, eliminado producto");
                const index = cartDto.products.findIndex(prod => prod.id == id_product)
                cart.products.splice(index, 1)

                return await this.cartRepository.repoDeleteProductFromCart(cart)
            }
        } catch (error) {
            console.log("desde cart service", error);
            throw error
        }
    }

    async getCarts() {
        const carts = await this.cartRepository.repoGetCarts()
        return carts
    }
}

export {
    CartService
}