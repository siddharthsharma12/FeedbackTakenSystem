import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import users from "../models/UserModel.js";
const router = express.Router();

// sign up start=================================================>
router.post('/signupuser', async(req, res)=>{
      
    const {email, password} = req.body;
    
    if(!email || !password)
    return res.status(400).json({msg:"please fill all the field"})

    
       
    const salt = await bcrypt.genSalt(10)
    const hashpassword = await bcrypt.hash(password, salt);
   
    
  try {
    await users.create({
        email: email,
        password: hashpassword
    })
    return res.status(200).json({msg:'user created successfully'})
  } catch (error) {
    res.status(400).json({msg: error.message})
  }
})
// sign up ends====================================================>

// login start====================================================>
router.post('/login',async(req,res)=>{
    const user = await users.findOne({ where : {email : req.body.email }});
    if(user){
       const password_valid = await bcrypt.compare(req.body.password,user.password);
       if(password_valid){
          const token = jwt.sign({ "id" : user.id,"email" : user.email,"first_Name":user.firstName },process.env.SECRET);
           res.status(200).json({ token : token });
       } else {
         res.status(400).json({ msg : "Password Incorrect" });
       }
     
     }else{
       res.status(404).json({ msg : "User does not exist" });
     }
     
     });
     // login ends====================================================>




export default router