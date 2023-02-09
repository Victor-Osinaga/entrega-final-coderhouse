import { Router } from "express";
import { isLogged } from "../../middlewares/isLogged.js";
import * as userController from "../../controller/user/user.controller.js";

const v1UserRouter = new Router()

v1UserRouter.post('/', userController.createUser)
v1UserRouter.get('/', isLogged, userController.getUserInfo)

export {
    v1UserRouter
}