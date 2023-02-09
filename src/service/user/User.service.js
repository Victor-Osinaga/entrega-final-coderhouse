import { v4 as uuidv4 } from 'uuid';
import bcryptjs from 'bcryptjs';
// data.password = await bcryptjs.hash(data.password, 8)
import {User} from '../../model/user/model/User.model.js'

class UserService{
    constructor(repository){
        this.userRepository = repository
    }

    async getUserById(id){
        try {
            const userById = await this.userRepository.repoGetUserById(id)
            if (!userById) throw {msg: "ID INVALIDO"}
            return userById
        } catch (error) {
            throw error
            console.log("desde user service",error);
        }
    }

    async createUser(body){
        try {
            const newUserNoDto = new User({
                id: uuidv4(),
                ...body
            })

            const userByEmail = await this.userRepository.repoGetUserByEmail(newUserNoDto.getEmail())
            if(userByEmail != null) throw {msg: "Email ya registrado"}

            newUserNoDto.setPassword(await bcryptjs.hash(newUserNoDto.getPassword(), 8))

            const registeredUserNoDto = await this.userRepository.repoCreateUser(newUserNoDto.convertToDTO())
            const newUser = new User(registeredUserNoDto)
            return newUser.convertToDTO()
        } catch (error) {
            throw error
            console.log("desde user service",error);
        }
    }
}

export{
    UserService
}