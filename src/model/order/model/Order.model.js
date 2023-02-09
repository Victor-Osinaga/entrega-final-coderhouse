class Order {
    #id
    #idCliente
    #timestamp
    #products
    constructor({id, idCliente, timestamp, products}){
        this.setId(id)
        this.setIdCliente(idCliente)
        this.setTimestamp(timestamp)
        this.setProducts(products)
    }

    // getter y setter ID
    setId(id){
        if(!id || id === undefined || id === "" || id.length == 0 || id.trim() == "") throw {msg: "ID es requerida"}
        this.#id = id
    }
    getId(){return this.#id}

    // getter y setter ID CLIENTE
    setIdCliente(idCliente){
        if(!idCliente || idCliente === undefined || idCliente === "" || idCliente.length == 0 || idCliente.trim() == "") throw {msg: "ID CLIENTE es requerida"}
        this.#idCliente = idCliente
    }
    getIdCliente(){return this.#idCliente}
    
    // getter y setter TIMESTAMP
    setTimestamp(timestamp){
        if(!timestamp || timestamp === undefined || timestamp === "" || timestamp.length == 0 || timestamp.trim() == "") throw {msg: "TIMESTAMP es requerida"}
        this.#timestamp = timestamp
    }
    getTimestamp(){return this.#timestamp}

    // getter y setter PRODUCTS
    setProducts(products){
        if(Array.isArray(products) != true) throw {msg: "PRODUCTS es requerida"}
        this.#products = products
    }
    getProducts(){return this.#products}
    
    // DTO
    convertToDTO(){
        return Object.freeze({
            id: this.#id,
            idCliente: this.#idCliente,
            timestamp: this.#timestamp,
            products: this.#products
        })
    }
}

export {Order}