import { orderService } from "../../service/order/order.factory.js"

const createOrder = async(req, res) => {
    try {
        const order = await orderService.createOrder(req.body.id)
        res.status(200).json({status: "ok", data: order})
    } catch (error) {
        res.status(500).json({status: "failed", data: error.msg})
    }
}

const getOrders = async(req, res) => {
    try{
        const orders = await orderService.getOrders(req.body.id)
        res.status(200).json({status: "ok", data: orders})
    }catch (error){
        res.status(500).json({status: "failed", data: error.msg})
    }
}

export {
    createOrder,
    getOrders
}