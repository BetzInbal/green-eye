const bcript = require("bcrypt")
const { UserModel } = require("../models/userModel")

const createUser = async (user) => {
    try {
        const { user_name, password, role, area, units} = user
        const hashedPassword = await bcript.hash(password, 10)
        const dbUser = new UserModel({
            user_name,
            password:hashedPassword,
            role,
            area,
            units})
            await dbUser.save()
    } catch (error) {
        throw error
    }
}

module.exports = {
    createUser
}