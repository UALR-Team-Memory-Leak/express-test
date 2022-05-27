'use strict'

const login = async ({req, res}) => {
    console.log("hi")
    const { email, password } = req.body;
    //const token = await auth.attempt(email, password);
    //return res.status(200).json({token});
    return {email, password};
}

module.exports = {login};