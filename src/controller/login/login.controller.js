import { loginService } from "../../service/login/login.factory.js"

const verifyCredential = async(req, res) => {
    try {
        const credential = await loginService.verifyCredential(req.body)
        res.status(200).json({status: "ok", data: credential})
    } catch (error) {
        res.status(500).json({status: "failed", data: error.msg})
    }
}

export {
    verifyCredential
}