const express = require('express');

const { getAllCategories, deleteCategory, getCategoryById, addNewCategory, updatedCategory, getCategoryBySlug } = require('../controllers/categoryController');
const { protect, permissionTo } = require('../middlewares/auth');
const router = express.Router()

router.get('/', getAllCategories)
router.get('/:slug',getCategoryBySlug)
router.post('/',protect, permissionTo(['admin']),addNewCategory)
router.patch('/:slug',updatedCategory)
router.delete('/:slug', deleteCategory)


module.exports = router