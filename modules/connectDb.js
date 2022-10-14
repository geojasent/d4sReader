import mongoose from "mongoose";
import 'dotenv/config' //environment variables
 
//connect to db
const connectDb = function() {

    mongoose.connect(process.env.MONGO_URI, (err)=>{
        if(err) throw err;

        console.log("DB Connected Successfully");
    })
}

export default connectDb