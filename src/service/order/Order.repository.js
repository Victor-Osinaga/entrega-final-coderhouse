class OrderRepository{
    constructor(dao){
        this.dao = dao;
    }

    async repoCreateOrder(orderDto){
        try {
            const createdOrder = await this.dao.createOrder(orderDto)
            return createdOrder
        } catch (error) {
            throw error
        }
    }

    async repoGetOrders(id){
        try {
            const orders = await this.dao.getOrders(id)
            return orders
        } catch (error) {
            throw error
        }
    }
}

export {
    OrderRepository
}