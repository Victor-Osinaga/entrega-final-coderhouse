import { cartDao } from '../../dao/cart/index.dao.js'

import {CartRepository} from './Cart.repository.js'
import {CartService} from './Cart.service.js'

const repository = new CartRepository(cartDao)

const cartService = new CartService(repository)

export {
    cartService,
}