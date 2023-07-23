const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "name is required"],
        trim: true,
        maxlength:[20, "length must not be more than 20 character"]
    },
    completed:{
         type: Boolean,
         default: false
    }
})

module.exports = mongoose.model('Task', TaskSchema)