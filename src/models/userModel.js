const mongoose = require('mongoose')

const userScheam = new mongoose.Schema({
    user_name:{ type:String,
         required:[true, 'user name is required'], 
         minLength:[5,'way too short name']}, 
    password:{
        type:String,
        required:[true,'password mast be provided']},
    role:{
        type:String,
        enum:['soldier', 'commander'],
        required:[true, 'pliase provide a role']},
    area:{
        type:String, 
        enum:['center', 'north', 'south', 'west', 'east'],
        required:[true, 'pliase provide an area']},
    units:{
        type:[Number],
        required:[true,'please specifi at least one unit']
    }
    })

    const UserModel = mongoose.model('user', userScheam)

    module.exports = {
        UserModel,
        userScheam
}