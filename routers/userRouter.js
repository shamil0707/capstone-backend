const express = require('express');

const { getAllUsers, deleteUser, updatedUser, addNewUser,  getUserById } = require('../controllers/userController');

const router = express.Router()


router.get('/', getAllUsers)
router.get('/:userId',getUserById)
router.post('/signup', addNewUser)
router.patch('/:userId',updatedUser)
router.delete('/:userId', deleteUser)
  
  


module.exports = router