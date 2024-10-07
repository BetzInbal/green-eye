const mongoose = require('mongoose')
const { userScheam } = require('./userModel')

const populationSchema = new mongoose.Schema({
    areas:[String],
    units:[Number]
    })

const greenEyeSchema = new mongoose.Schema({
    created_at:{ type:date,
        default: Date.now, },
    created_by:{
        type:mongoose.Schema.Types.ObjectId,
        erf:'user',
        required:[true,'creater mast be provided']},
    length:{
        type:Number,
        default:3 },
    replies:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:'user'
    },
    poulation:{populationSchema}
    })

    const GreenEyeModel = mongoose.model('greeneye', greenEyeSchema)

    module.exports = GreenEyeModel