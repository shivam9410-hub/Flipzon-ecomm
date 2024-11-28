import express from 'express' ; 
import { addToCart, getUserCart, updateCart } from '../controllers/cartController';

const cartRouter= express.Router();

cartRouter.post('/add', addToCart);
cartRouter.post('/update', updateCart);

cartRouter.get('/get', getUserCart);


export default cartRouter;