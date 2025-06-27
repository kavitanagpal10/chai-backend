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
        fullName:{
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

      // pre hook is method, we do dont use arrow funtion in hook becouse it do not context of this in incription 

UserSchema.pre("save",async function(next){
  if(!this.isModified("password")) return next() // if password is not modified then this line will be ignored by ! and goes to next() 
   this.password = bcrypt.hash(this.password, 10),
   next()
   })
   UserSchema.methods.isPasswordCorrect = async function(password){
      return bcrypt.compare(password , this.password)
   }
   UserSchema.methods.generateAccessToken = async function(){
      jwt.sign({
         _id:this._id,
         email: this.email,
         username:this.username,
         fullName: this.fullname
          
         
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
         expiresIn: process.env.ACCESS_TOKEN_EXPIRY 
      }
   )
      
   }
   UserSchema.methods.generateRefreshToken = async function(){
            jwt.sign({
         _id:this._id,
         email: this.email,
         username:this.username,
         fullName: this.fullname
          
         
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
         expiresIn: process.env.REFRESH_TOKEN_EXPIRY
      }
   )
      
   }

 export const User = mongoose.model("User", UserSchema)