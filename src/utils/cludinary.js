import { v2 as cloudinary } from 'cloudinary'
import fs from "fs" 

   cloudinary.config({ 
        cloud_name: process.env.backendwithchai, 
        api_key: process.env.CLOUDINART_API_KEY, 
        api_secret: process.env.CLOUDINART_API_SECRET// Click 'View API Keys' above to copy your API secret
    });

    const uplaodOnClousinary = async (localFilePath) =>{
        try{
            if(!localFilePath) return null
            //uploadfile on cloudinary 
           const response =  await cloudinary.uploader.upload(localFilePath, {
                resource_type:"auto"
            })
            //file has been uploaded sucessfully
            console.log("file is uploaded on cloudinary",response.url);
            return response;

        } catch(error){
            fs.unlinkSync(localFilePath) // remove the local save tem file as the upload operation failed

            return null;

        }
    }


export {uplaodOnClousinary}