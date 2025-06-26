
import dotenv from "dotenv"
import express from "express"
import connectDB from "./db/index.js"
const app = express()

dotenv.config({
    path:'./env'
})

connectDB()
.then(() =>{
    app.listen(process.env.PORT || 8000 ,() =>{
        console.log(`server is running at PORT:${process.env.PORT}`);
    })
})
.catch(() => {
    console.log("MONGO db connection failed !!!", console.error )
})




/*
(async () =>{
  
    try{
        
       await mongoose.connect(`${process.env.MONGODB_URI }/${DB_NAME}`)
       app.on("error",(error) =>{
        console.log("ERROR:", error)
        throw error
       })
       app.listen(process.env.PORT , () =>{
        console.log(`app is listening on port: ${process.env.PORT}`);
       })

    } catch{
        console.error("ERROR" , error)
        throw err
    }

} )()
 */