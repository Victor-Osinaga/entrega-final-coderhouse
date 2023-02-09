import bcryptjs from 'bcryptjs'
import { genAuthToken } from '../../utils/jwt/genAuthToken.js'

class LoginService {
    constructor(repository){
        this.userRepository = repository
    }
    async verifyCredential(body){
        try {
            if(!body?.email) throw {msg: "EMAIL es requerida"}
            if(!body?.password) throw {msg: "PASSWORD es requerida"}

            const userByEmail = await this.userRepository.repoGetUserByEmail(body.email)
            if(!userByEmail) throw {msg: "No existe un usuario con ese Email"}

            // console.log(userByEmail);
            if(await bcryptjs.compare(body.password, userByEmail.password)){
                // console.log("contraseña correcta")
                const obj = {
                    access_token: await genAuthToken(userByEmail.id),
                    // email: userByEmail.email,
                    // name: userByEmail.name,
                    // lastname: userByEmail.lastname,
                    // image: userByEmail.image
                }
                // console.log(obj);
                return obj
            }else{
                console.log("contraseña incorrecta")
                throw {msg: "Contraseña incorrecta"}
            }
        } catch (error) {
            console.log("desde login service", error);
            throw error
        }
    }
}

export {LoginService}