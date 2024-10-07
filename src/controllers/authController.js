const authService = require('../services/authService')

const login = async (req, res) =>
{
    try {
        const token = await authService.login(req.body)
        res.cookie('token',token)
        res.json('welcomev' + req.body.user_name)
    } catch (error) {
        res.status(400).json(error)
    }
}


const logout = async (req, res) =>
{
    try {
        
    } catch (error) {
        
    }
}


module.exports = {
    login,
    logout
}