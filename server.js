const express = require('express')
const exphandlebars= require('express-handlebars')
const bodyParser = require('body-parser')
const mysql = require('mysql') 
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//static files
app.use(express.static('public'))

//Template engine
const handlebars = exphandlebars.create({extname:'.hbs'})
app.engine('hbs', handlebars.engine)
app.set('view engine', 'hbs')

//Routes
app.get('/',(req, res) =>{
res.render('home')
})

//Listen on port
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})