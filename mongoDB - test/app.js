const bodyParser = require('body-parser')
const express = require('express')
const userRouter = require('./routes/user.route')
// const mongoConnect = require('./database/user.store').mongoConnect
const mongoose = require('mongoose')

const app = express()
app.use(bodyParser.json())
app.use(userRouter)

mongoose.connect('mongodb+srv://hamasahmed0:FHLi5erriQ2JKp8R@graduationtest.9fkwuia.mongodb.net/pms')
    .then(result => {
        app.listen(3000)
        console.log('Connected To DataBase')
    })
    .catch(err => {
        console.log(err)
    })


