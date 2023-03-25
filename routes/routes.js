const { Router } = require('express')
const express = require('express')
const router = express.Router()

//ruta del home
router.get('/', (req, res) => {
    // conexion
    res.render('index')
})
// ruta del login
router.get('/login', (req, res) => {
    // conexion
    res.render('login')
})
// ruta de register
router.get('/register', (req, res) => {
    // conexion
    res.render('register')
})

module.exports = router
