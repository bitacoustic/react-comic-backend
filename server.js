const express = require('express')
const bodyParser = require('body-parser')

const page = require('./src/routes/page.route')
const app = express()

const fs = require('fs')
let dbData_json = fs.readFileSync('db.json')
let dbData = JSON.parse(dbData_json)


const mongoose = require('mongoose')
mongoose.set('useUnifiedTopology', true)
let devDB = dbData.endpoint
const mongoDB = process.env.MONGODB_URI || devDB
mongoose.connect(mongoDB, { useNewUrlParser: true })
mongoose.Promise = global.Promise
let db = mongoose.connection
db.on('error', console.error.bind(console, 'MONGODB connection error:'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/pages', page)

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`)
})