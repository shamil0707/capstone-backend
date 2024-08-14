const express = require('express');

const { getAllCategories, deleteCategory, getCategoryById, addNewCategory, updatedCategory, getCategoryBySlug } = require('../controllers/categoryController');
const router = express.Router()

router.get('/', getAllCategories)
router.get('/:slug',getCategoryBySlug)
router.post('/', addNewCategory)
router.patch('/:slug',updatedCategory)
router.delete('/:slug', deleteCategory)


module.exports = router