class Product {
    #id
    #name
    #description
    #price
    #image
    constructor({id, name, description, price, image}){
        this.setId(id)
        this.setName(name)
        this.setDescription(description)
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
    
    // getter y setter DESCRIPTION
    setDescription(description){
        if(!description || description === undefined || description === "" || description.length == 0 || description.trim() == "") throw {msg: "DESCRIPTION es requerida"}
        this.#description = description
    }
    getDescription(){return this.#description}

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
            description: this.#description,
            price: this.#price,
            image: this.#image
        })
    }
}

export {Product}