const express = require('express');
const Product = require('../models/product');
const { getAllProducts, deleteProduct, updatedProduct, addNewProduct, getProductById } = require('../controllers/productController');

const router = express.Router()


router.get('/', getAllProducts)
router.get('/:productId',getProductById)
router.post('/', addNewProduct)
router.patch('/:productId',updatedProduct)
router.delete('/:productId', deleteProduct)

  


module.exports = router