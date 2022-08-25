import express from "express";
import mongoose from "mongoose";
import 'dotenv/config' //environment variables
 
//connect to db
const connectDb = function() {
    console.log('connect')
    const app = express();

    app.use(express.json());
    mongoose.connect(process.env.MONGO_URI, (err)=>{
        if(err) throw err;

        console.log("DB Connected Successfully");
    })

    const PORT = 4000;

    app.listen(PORT,()=>{
    console.log(`Server Running on port ${PORT}`);
    });
}

export default connectDb