import { Router } from "express";
import * as loginController from '../../controller/login/login.controller.js'

const v1Login = new Router()

v1Login.post('/', loginController.verifyCredential)

export {
    v1Login
}