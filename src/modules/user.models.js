import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"


 const UserSchema = new Schema(
    {
     username:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true

     },
        email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
     },
        fullname:{
        type: String,
        required: true,
        trim: true,
        index: true
     },
          avatar:{
        type: String,//cloudinary url
        required: true,
     },
        coverimage:{
        type: String,//cloudinary url
     },
        watchhistory:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Video"

     },
        password:{
        type: String,
        required: [true, "password is required"]

     },
        refreshtoken:{
        type: String
      
     }},
      {timestamps: true} )

UserSchema.pre("save",async function(next){
    
})

 export const User = mongoose.model("User", UserSchema)