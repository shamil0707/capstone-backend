const Product = require('../models/product')
const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});



const getAllProducts = async (req,res,next)=>{
    try {
        const products = await Product.find()
       res.status(200).json(products)
    } 
    catch (error) {
      
        res.status(500).send("Error occured")
        
    }
}

const getProductBySlug = async (req,res)=>{
    try {
        
    } 
    catch (error) {
        res.status(404).send("Could not find Product")
    }
}

const addNewProduct = async (req,res, next) => {
    try {
        if(!req.file){
            res.status(400).send("file missing")
        }
       
const uploadResult = await new Promise((resolve) => {
    cloudinary.uploader.upload_stream((error, uploadResult) => {
        return resolve(uploadResult);
    }).end(req.file.buffer);
});
 
    const body = JSON.parse(req.body.productDetails)
    const productDetails = {
        ...body,
        image: uploadResult.url
    }
         const product = new Product(productDetails)
         await product.save()
         res.status(200).json({})
    } catch (error) {
        console.log(error)
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
    getProductBySlug,
    addNewProduct,
    updatedProduct,
    deleteProduct
}