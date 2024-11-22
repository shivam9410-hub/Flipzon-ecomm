import {v2 as cloudinary} from 'cloudinary' ; 

const connectCloudinary =async()=>{
//     CLOUDINARY_API_KEY="328123578456959"
// CLOUDINARY_SECRET_KEY="Y2S9xQpG_rNjoT2ktwdRSxgeAHg"
// CLOUDINARY_NAME="dgienecu4"
    cloudinary.config({
        cloud_name:"dgienecu4",
        api_key:"328123578456959",
        api_secret:"Y2S9xQpG_rNjoT2ktwdRSxgeAHg"

    })
}
export default connectCloudinary;