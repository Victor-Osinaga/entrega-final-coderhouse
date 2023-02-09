import config from '../../../config.js';
import {productSchema} from '../../model/product/schema/product.schema.js'

let productDao;

switch (config.env) {

    case 'prod':
        const { default: ProductProdDAO } = await import('./ProductProd.dao.js');
        productDao = new ProductProdDAO('products', productSchema, config.prod_url);
    break;

    default:
        const {default: ProductDevDAO} = await import('./ProductDev.dao.js')
        productDao = new ProductDevDAO('products', productSchema, config.dev_url)
        break;
}

export { productDao }