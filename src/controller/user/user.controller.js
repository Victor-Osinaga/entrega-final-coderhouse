import {userService} from '../../service/user/user.factory.js'

const createUser = async (req, res) => {
    try {
        const createdUser = await userService.createUser(req.body)
        res.status(200).json({status: "ok", data: createdUser})
    } catch (error) {
        res.status(500).json({status: "failed", data: error.msg})
    }
}

const getUserInfo = async (req, res) => {
    try {
        const userInfo = await userService.getUserById(req.body.id)
        res.status(200).json({status: "ok", data: userInfo})
    } catch (error) {
        res.status(500).json({status: "failed", data: error.msg})
    }
}

export {
    createUser,
    getUserInfo
}