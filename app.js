import express from 'express';
import {v1ProductRouter} from './src/router/product/product.router.js'
import {v1UserRouter} from './src/router/user/user.router.js'
import {v1Login} from './src/router/login/login.router.js'
import { v1CartRouter } from './src/router/cart/cart.router.js';
import { v1Order } from './src/router/order/order.router.js';
import { v1Image } from './src/router/image/image.router.js'

const app = express()

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/products', v1ProductRouter)
app.use('/api/users', v1UserRouter)
app.use('/login', v1Login)
app.use('/api/shoppingcartproducts', v1CartRouter)
app.use('/api/orders', v1Order)
app.use('/api/images', v1Image)

app.all('*', (req, res) => {
    res.json({ error: `404 Not Found`, desc: `No se encontro la página que buscas.` });
  });

export {app}