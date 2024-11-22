import mongoose from 'mongoose';

const connectDB= async()=>{
    mongoose.connection.on('connected',()=>{
        console.log(`MongoDB Connected`)
    })
    await mongoose.connect(`mongodb+srv://shivamkhantwal9410:abcd1234@cluster0.m8olg.mongodb.net/khantwalstore`)
}

export default connectDB;