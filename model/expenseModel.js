import mongoose from "mongoose";

const{Schema}=mongoose;

const expenseSchema=new Schema({
    name:{
        type:String,

    },
    datetime:{
        type:String,
    },
    description:{
        type:String,
    },
 
    

},
{
    timestamps:true
})
export const expense =mongoose.model('expense',expenseSchema);