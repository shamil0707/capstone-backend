const express = require('express');
const { getAllProducts, deleteProduct, updatedProduct, addNewProduct,  getProductBySlug } = require('../controllers/productController');
const router = express.Router()
const multer = require ("multer")
const path = require ("path")


const memoryStorage = multer.memoryStorage()


const upload = multer({ storage: memoryStorage })

router.get('/', getAllProducts)
router.get('/:productId',getProductBySlug)
router.post('/', upload.single('picture'),addNewProduct)
router.patch('/:productId',updatedProduct)
router.delete('/:productId', deleteProduct)

  


module.exports = router