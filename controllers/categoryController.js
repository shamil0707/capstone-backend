const Category = require("../models/category")

const getAllCategories = async (req,res,next)=>{
    try {
        const categories = await Category.find()
       res.status(200).json(categories)
    } 
    catch (error) {
        res.status(500).send("Error occured")
        
    }
}

const getCategoryById = async (req,res)=>{
    try {
        const category = await Category.findById(req.params.categoryId)
        res.status(200).json(category)
    } 
    catch (error) {
        res.status(404).send("Could not find category")
    }
}

const addNewCategory = async (req,res,next)=>{
    try {
        const category = new Category(req.body)
        await category.save()
        res.status(201).json(category)
    } catch (error) {
        res.status(400).send("Check data")
    }
}

const updatedCategory = async (req,res,next)=>{
   try {
    const updateCategory = await Category.findByIdAndUpdate(req.params.categoryId, req.body, {new:true})
    res.status(200).json(updatedCategory)
    
   } catch (error) {
    res.status(404).send("Error")
   }
}

const deleteCategory = async (req,res,next)=>{
    try {
        await Category.findByIdAndDelete(req.params.categoryId)
        res.status(200).send("Deleted")
    } catch (error) {
        res.status(404).send("Error")
    }
}
module.exports ={
    getAllCategories,
    getCategoryById,
    addNewCategory,
    updatedCategory,
    deleteCategory
}