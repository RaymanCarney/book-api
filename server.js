const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config()
const PORT = process.env.PORT
const app = express()
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true },
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

app.use(express.urlencoded({ extended: true }))

const booksController = require('./controllers/books-controller.js')
app.use('/books', booksController)

app.get('/', (req, res) => {
    res.send('Welcome to the Books API!')
})

app.listen(PORT, () => {
    console.log('Greetings! From port: ', PORT);
})