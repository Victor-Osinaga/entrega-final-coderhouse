import { v4 as uuidv4 } from 'uuid';
import {Order} from '../../model/order/model/Order.model.js'
import { cartService } from '../cart/cart.factory.js';
import { userService } from '../user/user.factory.js';
import { sendMailUser } from '../../utils/sendMailUser.js';
import { sendMailAdmin } from '../../utils/sendMailAdmin.js';

class OrderService{
    constructor(repository){
        this.orderRepository = repository
    }

    async getOrders(id){
        try {
            const orders = await this.orderRepository.repoGetOrders(id)
            if(!orders) throw {msg: "No hay ordenes"}
            return orders
        } catch (error) {
            throw error
        }
    }

    async createOrder(id){
        try {
            const cart = await cartService.getProductsFromCart(id)
            if(!cart) throw {msg: "No existe ese carrito"}
            if(cart?.products.length == 0) {throw {msg: "No puedes crear una orden sin productos en tu carrito"}}
            const fecha = new Date().toLocaleDateString()
            const hora = new Date().toTimeString()
            const hora2 = hora.slice(0, -(hora.length - 8))
            const order = new Order({
                id: uuidv4(),
                idCliente: id,
                timestamp: `${fecha} ${hora2}`,
                products: cart.products
            })

            const user = await userService.getUserById(id)

            const createdOrder = await this.orderRepository.repoCreateOrder(order.convertToDTO())
            const deletedProducts = await cartService.deleteProductsFromCart(id)
            const mailAdmin = await sendMailAdmin(user, order.convertToDTO());
            const mailUser = await sendMailUser(user, order.convertToDTO())
            return createdOrder
        } catch (error) {
            throw error
        }
    }
}

export {
    OrderService
}