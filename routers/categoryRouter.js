const express = require('express');

const { getAllCategories, deleteCategory, getCategoryById, addNewCategory, updatedCategory } = require('../controllers/categoryController');
const router = express.Router()

router.get('/', getAllCategories)
router.get('/:categoryId',getCategoryById)
router.post('/', addNewCategory)
router.patch('/:categoryId',updatedCategory)
router.delete('/:categoryId', deleteCategory)


module.exports = router