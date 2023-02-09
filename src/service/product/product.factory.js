import { productDao } from '../../dao/product/index.dao.js'

import {ProductRepository} from './Product.repository.js'
import {ProductService} from './Product.service.js'

const repository = new ProductRepository(productDao)

const productService = new ProductService(repository)

export {
    productService,
}