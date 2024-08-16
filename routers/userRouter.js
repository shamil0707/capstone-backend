const express = require('express');

const { getAllUsers, deleteUser, updatedUser, addNewUser,  getUserById } = require('../controllers/userController');
const { protect } = require('../middlewares/auth');

const router = express.Router()


router.get('/', getAllUsers)
router.get('/currentUser', protect , getUserById)
router.post('/signup', addNewUser)
router.patch('/:userId',updatedUser)
router.delete('/:userId', deleteUser)
  
  


module.exports = router