const User = require ('../models/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRounds = 10;


const login = async (req,res,next)=>{

try {
    const {email, password} = req.body
    const user = await User.findOne({email:email})
    if(!user){
      return  res.status(401).send("email does not exist")
    }
    const passwordMatch = bcrypt.compareSync(password,user.password); 
    if(passwordMatch){
        const token = jwt.sign( {_id: user._id, name: user.name, email: user.email},process.env.JWT_PRIVATE_KEY);
        
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
        
        res.send("logged")
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
    verifyLogin
}