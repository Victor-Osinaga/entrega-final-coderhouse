class ProductCart {
    #id
    #name
    #quantity
    #price
    #image
    constructor({id, name, quantity, price, image}){
        this.setId(id)
        this.setName(name)
        this.setQuantity(quantity)
        this.setPrice(price)
        this.setImage(image)
    }

    // getter y setter ID
    setId(id){
        if(!id || id === undefined || id === "" || id.length == 0 || id.trim() == "") throw {msg: "ID es requerida"}
        this.#id = id
    }
    getId(){return this.#id}

    // getter y setter NAME
    setName(name){
        if(!name || name === undefined || name === "" || name.length == 0 || name.trim() == "") throw {msg: "NAME es requerida"}
        this.#name = name
    }
    getName(){return this.#name}
    
    // getter y setter QUANTITY
    setQuantity(quantity){
        if(!quantity || isNaN(quantity) === true) throw {msg: "QUANTITY es requerida"}
        this.#quantity = quantity
    }
    getQuantity(){return this.#quantity}

    // getter y setter PRICE
    setPrice(price){
        if(!price || isNaN(price) === true) throw {msg: "PRICE es requerida"}
        this.#price = price
    }
    getPrice(){return this.#price}

    // getter y setter IMAGE
    setImage(image){
        if(!image || image === undefined || image === "" || image.length == 0 || image.trim() == "") throw {msg: "IMAGE es requerida"}
        this.#image = image
    }
    getImage(){return this.#image}
    
    // DTO
    convertToDTO(){
        return Object.freeze({
            id: this.#id,
            name: this.#name,
            quantity: this.#quantity,
            price: this.#price,
            image: this.#image
        })
    }
}

export {ProductCart}