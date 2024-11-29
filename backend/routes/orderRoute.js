import express from 'express' ;
import {  placeOrder,allOrders, placeOrderRazorpay, placeOrderStripe, updateStatus, userOrders } from '../controllers/orderController';
import adminAuth from '../middleware/adminAuth';
import authUser from '../middleware/auth';

const orderRouter= express.Router() ; 

orderRouter.post('/list', adminAuth, allOrders)  ;
orderRouter.post('/status', adminAuth, updateStatus);
orderRouter.post('/place', authUser,placeOrder) ;
orderRouter.post('/stripe', authUser, placeOrderStripe);
orderRouter.post('/razorpay', authUser, placeOrderRazorpay);
orderRouter.post('/userorders', authUser,userOrders) ;

export default orderRouter ;
