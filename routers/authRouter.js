const express = require ('express')
const { login, verifyLogin } = require('../controllers/authController')
const { verify } = require('jsonwebtoken')
const router = express.Router()


router.post('/login',login)

router.get('/verify', verifyLogin)


module.exports = router