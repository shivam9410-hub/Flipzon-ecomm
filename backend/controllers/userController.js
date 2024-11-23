import validator from "validator";
import userModel from "../models/userModal.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const createToken=(id)=>{
return jwt.sign({id}, "greatstack") ;
}
const loginUser= async(req,res)=>{
 try{
    const {email, password} = req.body ; 
    const user = await userModel.find({email}) ; 
    if(!user){
        return res.json({success:false, message:"User not found"}) ;
 
    }
    const isMatch= await bcrypt.compare(password,user.password) ;
    if(isMatch){
        const token = createToken(user._id) ;
        res.json({success:true, token}) ;
    }
    else 
    res.json({success:false, message:"Invalid password"}) ;
 }
 catch(err){

    console.log(err) ;
    res.json({success:false, message:err.message}) ;  // handle server error here  ;
 }
}
const registerUser = async(req,res)=>{
    try{
        const {name, email, password} = req.body ; 
         const exists= await userModel.findOne({email}) ;
         if(exists){
            return res.json({success:false,message:"User already exists"});
         }

     if(!validator.isEmail(email)){
        return res.json({success:false,message:"Please enter valid email"})
     }
     if(password.length <8){
        return res.json({success:false,message:"Please enter a strong password"}) ;
     }


     /// hasing user password ;

     const salt= await bcrypt.genSalt(10) ;
     const hashedPassword= await bcrypt.hash(password,salt) ;
     const newUser= new userModel({name,email,password:hashedPassword}) ;
  const user = await newUser.save() ; 
  const token = createToken(user._id) ;
 res.json({success:true, token}) ;
    }catch(error){
          console.log(error) ;
        res.json({success:false, message:error.message}) ;  // handle server error here  ;
    }
}

const adminLogin= async(req,res)=>{
  try{
      const {email, password}= req.body;
      if(email==="admin@forever.com" && password==="qwerty123"){
          const token = jwt.sign(email+password, "greatstack") ;
          res.json({success:true, token}) ;
      }
      else {
         res.json({sucess:false,message:"Invalid credentials"});
      }
  }
  catch(error){
   console.log(error);
   res.json({success:false, message:error.message}) ;  // handle server error here  ;
  }
}

export {loginUser,registerUser,adminLogin} 