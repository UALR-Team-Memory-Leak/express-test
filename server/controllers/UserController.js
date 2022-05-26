'use strict'

class UserController {
    async login ({request, auth, response}) {
        const { email, password } = request.all();
        const token = await auth.attempt(email, password);
        return response.status(200).json({token});
    }
}

module.exports = UserController