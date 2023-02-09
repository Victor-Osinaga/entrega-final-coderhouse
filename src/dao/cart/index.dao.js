import config from '../../../config.js';
import {cartSchema} from '../../model/cart/schema/cart.schema.js'

let cartDao;

switch (config.env) {

    case 'prod':
        const { default: CartProdDAO } = await import('./CartProd.dao.js');
        cartDao = new CartProdDAO('carts', cartSchema, config.prod_url);
    break;

    default:
        const {default: CartDevDAO} = await import('./CartDev.dao.js')
        cartDao = new CartDevDAO('carts', cartSchema, config.dev_url)
        break;
}

export { cartDao }