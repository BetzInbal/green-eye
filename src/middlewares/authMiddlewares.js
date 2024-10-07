const jwt = require("jsonwebtoken")
const { models } = require("mongoose")


const onlyCommanders = async (req,res,next) => {
    try {
        
    } catch (error) {
        
    }
}

const onlySoldiersAndCommanders = async (req,res,next) => {
    try {
        const token = req.cookies.token
        const userData = await jet.verify(token, process.env.TOP_SECRET)
        req.user = userData
        next()
    } catch (error) {
        res.status(401).json(error)
    }
}


module.exports = {
    onlyCommanders,
    onlySoldiersAndCommanders
}