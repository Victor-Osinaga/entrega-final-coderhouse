import { userDao } from '../../dao/user/index.dao.js'
import { LoginRepository } from "./Login.repository.js";
import { LoginService } from "./Login.service.js";

const repository = new LoginRepository(userDao)

const loginService = new LoginService(repository)

export {
    loginService,
}