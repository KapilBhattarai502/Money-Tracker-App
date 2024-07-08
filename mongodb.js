import mongoose from 'mongoose'
import 'dotenv/config'

const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("DB CONNECTED SUCCESSFULLY!!!")
        
    } catch (error) {
        console.log("DB connection failed",error);
        
    }
}
export default connectDB;