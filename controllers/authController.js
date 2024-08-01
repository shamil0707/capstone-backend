const User = require ('../models/user')
const bcrypt = require('bcrypt');
const saltRounds = 10;


const login = async (req,res,next)=>{

try {
    const {email, password} = req.body
    const user = await User.findOne({email:email})
    if(!user){
        res.status(401).send("email does not exist")
    }
    const passwordMatch = bcrypt.compareSync(password,user.password); 
    if(passwordMatch){
        res.status(200).send("login success")
    }
    else{
        res.status(401).send("incorrect password")
    }

} catch (error) {
    res.status(401).send("login not possible")
}

}

module.exports ={
    login
}