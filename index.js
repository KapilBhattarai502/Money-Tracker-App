import express from "express"
import cors from "cors"
import connectDB from "./mongodb.js";
import { expense } from "./model/expenseModel.js";

const app=express();
app.use(express.json())
app.use(cors())
connectDB();



app.listen("5500",(req,res)=>{
    console.log(`App is listening to the port 5500`);
})

app.post("/api/transaction",async(req,res)=>{
  
   
    const expenseData=req.body;
    try {
        const dbexpense=await expense.create(expenseData);
        res.json(dbexpense);
        
    } catch (error) {
        console.log("ERROR",error)
        
        
    } 
   
})
app.get("/alltransactions",async(req,res)=>{
    const alltransactions=await expense.find({});
    res.json(alltransactions)
 
})
