const User = require("../models/user")
const bcrypt = require('bcrypt');
const saltRounds = 10;

const getAllUsers = async (req,res,next)=>{
    try {
        const users = await User.find()
       res.status(200).json(users)
    } 
    catch (error) {
        res.status(500).send("Error occured")
        
    }
}

const getUserById = async (req,res,next)=>{
    res.send("Not written")
    }


const addNewUser = async (req,res,next)=>{
    try {
        const hash = bcrypt.hashSync(req.body.password, saltRounds);
        const user = new User({
          ...req.body,
          password:hash
    
        }
        )
        await user.save()
        res.status(201).json(user)
    } catch (error) {
        res.status(400).send("Check data")
    }
}

const updatedUser = async (req,res,next)=>{
  
    res.send("Not written")
  
}

const deleteUser = async (req,res,next)=>{
   res.send("Not written")
}
module.exports ={
    getAllUsers,
    getUserById,
    addNewUser,
    updatedUser,
    deleteUser
}