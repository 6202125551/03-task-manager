const dotenv =require('dotenv').config()
const express = require('express');
const notFound = require('./middleware/not-found')

const connectDB = require('./db/connect')

const url = process.env.MONGO_URL
connectDB(url);

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())

app.use('/api/v1/tasks', require('./routes/tasks'))
app.use(notFound)







app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`)
})
