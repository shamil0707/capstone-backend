const User = require ('../models/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRounds = 10;

const logout = async (req,res,next) =>{
    try {
        res.cookie('token','',{httpOnly:true,expires:new Date(0) })
        res.send("logged out")
    } catch (error) {
        res.status(500).send("could not process")
    }
}

const login = async (req,res,next)=>{

try {
    const {email, password} = req.body
    const user = await User.findOne({email:email})
    if(!user){
      return  res.status(401).send("email does not exist")
    }
    const passwordMatch = bcrypt.compareSync(password,user.password); 
    if(passwordMatch){
        const token = jwt.sign( {_id: user._id, name: user.name, email: user.email, role: user.role},process.env.JWT_PRIVATE_KEY);
        
        res.cookie('token', token,{httpOnly: true, secure: false})
        res.status(200).send("Login successful")
    }
    else{
        res.status(401).send("incorrect password")
    }

} catch (error) {
    res.status(401).send("login not possible")
}

}

const verifyLogin = async (req,res) =>{
    try {
       
       const token = req.cookies?.token
       if(token){
        const decoded = jwt.verify(token, process.env.JWT_PRIVATE_KEY);  
        res.status(200).json({
            _id: decoded._id,
            name: decoded.name
        })
       }
       else {
        res.status(401).send("not logged in")
       }
            
    } catch (error) {
       res.status(401).send("not logged in")
    }
}

module.exports ={
    login,
    logout,
    verifyLogin
}