const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    
    employee_name: {
        type: String,
        required: true
    },
    employee_salary: {
        type: Number,
        required: true
    },
    employee_age: {
        type: Number,
        required: true
    },

})

module.exports = mongoose.model('datas', dataSchema)