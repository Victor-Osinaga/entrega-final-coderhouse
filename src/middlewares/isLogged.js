import { decodificar } from "../utils/jwt/decodificar.js";

const isLogged = async (req,res, next) => {
    try {
        const authHeader = req.headers["authorization"] || req.headers["Authorization"] || '';

        if (!authHeader) throw {msg: "Se requiere autenticacion(auth header)"}
        const token = authHeader.split(' ')[1]

        if (!token) throw {msg: "Se requiere autenticacion (token)"}

        try {
            const objetoOriginal = await decodificar(token)
            req.body.id = objetoOriginal.data
            // console.log("ID decodificado", objetoOriginal.data);
            next();
            // req.user = objetoOriginal
        } catch (ex) {
            throw {msg: "token invalido"}
        }

        
    } catch (error) {
        console.log("desde mid islogged", error);
        res.status(400).json({status: "failed", error: error.msg})
    }
}

export{
    isLogged
}