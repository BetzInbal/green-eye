const jwt = require("jsonwebtoken")
const { models } = require("mongoose")


const onlyCommanders = async (req,res,next) => {
    try {
        const token = req.cookies.token
        const userData = await jwt.verify(token, process.env.TOP_SECRET)
        req.user = userData
        if (userData.role != 'commander'){
            res.status(403)
            .json('You are far too simple')
        }
        next()
    } catch (error) {
        console.log(error);
        res.status(401).json(error)
    }
}

const onlySoldiersAndCommanders = async (req,res,next) => {
    try {
        const token = req.cookies.token
        const userData = await jwt.verify(token, process.env.TOP_SECRET)
        req.user = userData
        next()
    } catch (error) {
        console.log(error);
        res.status(401).json(error)
    }
}


module.exports = {
    onlyCommanders,
    onlySoldiersAndCommanders
}