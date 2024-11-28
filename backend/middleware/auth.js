import jwt from 'jsonwebtoken' ; 
const authUser = async (req, res) => {

const {token} =req.headers; 

if(!token){
    return res.json({success:false,message:'Not Authorized Login Again'}) 
}
try{
    const token_decode= jwt.verify(token,'greatstack');
    req.user=token_decode;
    next();
}

}
