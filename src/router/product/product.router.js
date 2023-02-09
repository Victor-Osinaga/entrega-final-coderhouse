import { Router } from "express";
import * as productController from '../../controller/product/product.controller.js'
import { isLogged } from "../../middlewares/isLogged.js";
import { isAdmin } from "../../middlewares/isAdmin.js";

const v1ProductRouter = new Router()

v1ProductRouter.get('/', productController.getProducts)
v1ProductRouter.get('/:id', productController.getProductById)
v1ProductRouter.post('/', isLogged, isAdmin, productController.createProduct)
v1ProductRouter.delete('/:id', isLogged, isAdmin, productController.deleteProductById)
v1ProductRouter.put('/:id', isLogged, isAdmin, productController.updateProductById)

export {
    v1ProductRouter
}