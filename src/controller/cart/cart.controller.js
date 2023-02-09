import { cartService } from "../../service/cart/cart.factory.js"

const getProductsFromCart = async(req, res) => {
    try {
        const products = await cartService.getProductsFromCart(req.body.id)
        res.status(200).json({status: "ok", data: products})
    } catch (error) {
        res.status(500).json({status: "failed", data: error})
    }
}

const createProductToCart = async(req, res) => {
    try {
        const {id, id_product} = req.body
        const newCart = await cartService.createProductToCart(id, id_product)
        res.status(200).json({status: "ok", data: newCart})
    } catch (error) {
        res.status(500).json({status: "failed", data: error})
    }
}

const deleteProductFromCart = async(req, res) => {
    try {
        const {id} = req.body
        const {idProduct} = req.params
        const newCart = await cartService.deleteProductFromCart(id, idProduct)
        res.status(200).json({status: "ok", data: newCart})
    } catch (error) {
        res.status(400).json({status: "failed", data: error})
    }
}

export {
    getProductsFromCart,
    createProductToCart,
    deleteProductFromCart
}