console.clear()

const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const path = require('path')

// .env configuration
dotenv.config()

// Database connection
const connectDB = require('./config/connectDB')
connectDB()

const app = express()
const studentRoutes = require('./routes/routes')
//-----------------------------------------------
// Allow cross origin
app.use(cors())
// Middleware to print the method and url
app.use((req, res, next) => {
  console.log(req.method + '\t' + req.url)
  next()
})
//Handles Form data & Json data
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
//-----------------------------------------------

// API calling
app.use('/',studentRoutes)

// Running the port
app.listen(process.env.PORT, () => {
  console.log('Server running at '+process.env.PORT+"💖")
})