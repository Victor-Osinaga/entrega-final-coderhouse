import { Router } from "express";
import * as orderController from '../../controller/order/order.controller.js'
import { isLogged } from "../../middlewares/isLogged.js";

const v1Order = new Router()

v1Order.post('/', isLogged, orderController.createOrder)
v1Order.get('/', isLogged, orderController.getOrders)

export {
    v1Order
}