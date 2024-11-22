import express from "express";
import { adminLogin, loginUser, registerUser } from "../controllers/userController.js";


const userRouter= express.Router();

userRouter.get('/register', registerUser);
userRouter.post('/login', loginUser);

userRouter.post('/admin/',adminLogin) ;

export default userRouter;