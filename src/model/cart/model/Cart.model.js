class Cart {
    #id
    #products
    constructor({id, products}){
        this.setId(id)
        this.setProducts(products)
    }

    // getter y setter ID
    setId(id){
        if(!id || id === undefined || id === "" || id.length == 0 || id.trim() == "") throw {msg: "ID es requerida"}
        this.#id = id
    }
    getId(){return this.#id}

    // getter y setter PRODUCTS
    setProducts(products){
        if(Array.isArray(products) != true) throw {msg: "PRODUCTS es requerida"}
        this.#products = products
    }
    getProducts(){return this.#products}

    convertToDTO(){
        return Object.freeze({
            id: this.#id,
            products: this.#products
        })
    }
}

export {
    Cart
}