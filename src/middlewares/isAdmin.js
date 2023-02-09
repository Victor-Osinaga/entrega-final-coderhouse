import { userService } from "../service/user/user.factory.js";
import config from "../../config.js";
const isAdmin = async (req, res, next) => {
    try {
        const isAdmin = await userService.getUserById(req.body.id)
        console.log(isAdmin);
        if(isAdmin.email === config.emailAdmin ) {
            next()
        }else{
            throw {msg: "No eres admin"}
        }
    } catch (error) {
        console.log("desde mid iAdmin", error);
        res.status(400).json({status: "failed", data: error})
    }
}

export {
    isAdmin
}