import mongoose, { mongo } from "mongoose";
import { products } from "../../src/assets/assets";

const productSchema= new mongoose.Schema({
    name:{type:String, required:true},
    descritpion:{type:String, required:true},
    price:{type:Number, required:true},
    image:{type:Array, required:true},
   
    category:{type:String, required:true},
    subcategory:{type:String, required:true},
    sizes:{type:Array, required:true},
    bestseller:{type:Boolean, default:false},
    date:{type:Date, required:true},

})

const productModel = mongoose.models.product || mongoose.model("product",productSchema) 


export  default productModel;