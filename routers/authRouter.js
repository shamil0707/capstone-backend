const express = require ('express')
const { login, verifyLogin, logout } = require('../controllers/authController')
const { verify } = require('jsonwebtoken')
const router = express.Router()


router.post('/login',login)

router.get('/verify', verifyLogin)

router.get('/logout', logout)


module.exports = router