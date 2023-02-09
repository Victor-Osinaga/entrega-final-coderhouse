class LoginRepository{
    constructor(dao){
        this.dao = dao
    }

    async repoGetUserByEmail(email){
        try {
            const userByEmail = await this.dao.getUserByEmail(email)
            return userByEmail
        } catch (error) {
            console.log("desde login repository", error);
            throw error
        }
    }
}

export {
    LoginRepository
}