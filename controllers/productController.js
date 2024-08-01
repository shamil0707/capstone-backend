const Product = require('../models/product')

const getAllProducts = async (req,res,next)=>{
    try {
        const products = await Product.find()
       res.status(200).json(products)
    } 
    catch (error) {
        res.status(500).send("Error occured")
        
    }
}

const getProductById = async (req,res)=>{
    try {
        const Product = await Product.findById(req.params.ProductId)
        res.status(200).json(Product)
    } 
    catch (error) {
        res.status(404).send("Could not find Product")
    }
}

const addNewProduct = async (req,res,next)=>{
    try {
        const product = new Product(req.body)
        await product.save()
        res.status(201).json(product)
    } catch (error) {
        res.status(400).send("Check data")
    }
}

const updatedProduct = async (req,res,next)=>{
   try {
    const updateProduct = await Product.findByIdAndUpdate(req.params.ProductId, req.body, {new:true})
    res.status(200).json(updatedProduct)
    
   } catch (error) {
    res.status(404).send("Error")
   }
}

const deleteProduct = async (req,res,next)=>{
    try {
        await Product.findByIdAndDelete(req.params.ProductId)
        res.status(200).send("Deleted")
    } catch (error) {
        res.status(404).send("Error")
    }
}
module.exports ={
    getAllProducts,
    getProductById,
    addNewProduct,
    updatedProduct,
    deleteProduct
}