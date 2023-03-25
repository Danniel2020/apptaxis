const express = require ('express')
const enev = require ('dotenv')
const cokiesParser = require('cookie-parser')

const app = exprees()
// stear eñmotor de la plantilla
app.set ('view','ejs')
//stiar la carpeta publica
app.user(express.static('public'))

//configurar node para procesar los formularios
app.user(express.urlencoded({extended:true}))
app,use(express.json())

//stear las variables
dotenv.config({path:'./env/.env'})


// llamar el enrutador

app.user('/',require('./routes/routes.js'))

app.listen(3000,()=>{
    console.log('El servidor esta corriendo en http://localhost:3000')
})

