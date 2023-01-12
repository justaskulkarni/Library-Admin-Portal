require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

const connectDB = require('./db/connect')
const booksRouter = require('./routes/books')

// routes

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

app.get('/', (req, res) =>{
    res.send('<h1>Store API</h1><a href = "/api/v1/books">books routes</a>')
})

app.use('/api/v1/books', booksRouter)

// middleware
app.use(express.json())
app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 3000

const start = async() =>{
    try {
        //connectDB
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on PORT ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()