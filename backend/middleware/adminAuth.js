import jwt from 'jsonwebtoken' ; 

const adminAuth= async (req, res,next) => {

try{
    const {token} =req.headers; 

    if(!token){
        return res.json({success:false, message:"Not Authorized Login Again"}) ;
    }
    const token_decode= jwt.verify(token,"greatstack")

     if(token_decode!=="admin@forever.comqwerty123"){
   return res.json({sucess:false, message:"Not Authorized Login Again"}) ;
     }
     next() ;
}catch(e){
         console.log(e) ;
         res.json({sucess:false, message:"Not Authorized Login Again"}) ;
}

}

export default adminAuth ;