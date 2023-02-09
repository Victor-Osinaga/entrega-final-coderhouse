import {productService} from '../../service/product/product.factory.js'
const getProducts = async (req, res) => {
    try {
        const products = await productService.getProducts();
        res.status(200).json({status: "ok", data: products});
    } catch (error) {
        res.status(500).json({status: "failed", data: error.msg})
    }
}

const createProduct = async (req, res) => {
    try {
        const product = await productService.createProduct(req.body);
        res.status(200).json({status: "ok", data: product});
    } catch (error) {
        res.status(500).json({status: "failed", data: error.msg})
    }
}

const getProductById = async (req, res) => {
    try {
        const product = await productService.getProductById(req.params.id);
        res.status(200).json({status: "ok", data: product});
    } catch (error) {
        res.status(400).json({status: "failed", data: error.msg})
    }
}

const deleteProductById = async (req, res) => {
    try {
        const deletedProduct = await productService.deleteProductById(req.params.id);
        res.status(200).json({status: "ok", data: deletedProduct});
    } catch (error) {
        res.status(400).json({status: "failed", data: error.msg})
    }
}

const updateProductById = async (req, res) => {
    try {
        const updatedProduct = await productService.updateProductById(req.params.id, req.body);
        res.status(200).json({status: "ok", data: updatedProduct});
    } catch (error) {
        res.status(500).json({status: "failed", data: error.msg})
    }
}

export {
    getProducts,
    createProduct,
    getProductById,
    deleteProductById,
    updateProductById
}