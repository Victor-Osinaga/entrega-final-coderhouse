import { Router } from "express";
import * as cartController from '../../controller/cart/cart.controller.js'
import { isLogged } from "../../middlewares/isLogged.js";

const v1CartRouter = new Router()

v1CartRouter.get('/', isLogged, cartController.getProductsFromCart)
v1CartRouter.post('/', isLogged, cartController.createProductToCart)
v1CartRouter.delete('/:idProduct', isLogged, cartController.deleteProductFromCart)

export {
    v1CartRouter
}