import orderModel from "../models/orderModel.js";
import userModel from "../models/userModal";
const placeOrder=async(req,res)=>{

try{
 const {userId, items,amount, address}= req.body ; 
 const orderData={
    userId, 
    items,
    amount,
    paymentMethod:"COD",
    payment:false,
    date:Date.now() 
 }
 const newOrder = new orderModel(orderData) ; 
 await newOrder.save() ;
 await userModel.findByIdAndUpdate(userId,{cartData:{}});
 res.json({success:true,message:"Order placed successfully"}) ;  // handle success case here  ;
}catch(error){
console.log(error) ; 
res.json({success:false,message:error.message}) ; // handle error case here ;
}

}

//placing orders using stripe method
const placeOrderStripe= async(req,res)=>{

}
//placing orders using razorpay method
const placeOrderRazorpay= async(req,res)=>{

}
//all orders data for admin panel
const  allOrders= async(req,res)=>{

}
//user order data for frontend 
const userOrders= async(req,res)=>{

}
//update order status from admin panel;
const updateStatus= async(req,res)=>{

}
export {placeOrder,userOrders,updateStatus,allOrders,placeOrderRazorpay,placeOrderStripe};
