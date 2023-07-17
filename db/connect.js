const mongoose = require('mongoose')
const url = process.env.MONGO_URL

const connectDB = (url) =>{

    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }
         ).then(() => {
        console.log('database is running....')
    }).catch((err) => {
        console.log(err)
    })
}

module.exports = connectDB;