const authService = require('../services/authService')

const login = async (req, res) =>
{
    try {
        const token = await authService.login(req.body)
        res.cookie('token',token)
        res.json('welcomev' + req.body.user_name)
    } catch (error) {
        console.log(error);      
        res.status(400).json(error)
    }
}


const logout = async (req, res) =>
{
    try {       
        res.clearCookie('token').send('cookie clear')
    } catch (error) {
        res.sendstatus(500)
    }
}


module.exports = {
    login,
    logout
}