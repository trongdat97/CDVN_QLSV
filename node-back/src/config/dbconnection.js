import { MONGO_URL } from "./env";
import mongoose  from "mongoose";


export default async()=>{
    try{
        await mongoose.connect(MONGO_URL),{};
        console.log("Connected to MongoDB");
    }
    catch(err){
        console.log(err);
    }
}