import React, { useState,useEffect } from "react";
import "./App.css";

import Displaydata from "./components/Displaydata";
const App = () => {
  const [name, setName] = useState("");
  const [datetime, setDatetime] = useState("");
  const [description, setDescription] = useState("");
  const [expensedata,setExpensedata]=useState([]);

  useEffect(()=>{
    fetch("http://localhost:5500/alltransactions").then((response)=>{
        response.json().then((alltransactions)=>{
            setExpensedata(alltransactions);
  
        })
        
    })
},[expensedata])
  
 

  async function addNewTransaction(event) {
    event.preventDefault();
     fetch("http://localhost:5500/api/transaction",{
     method:'POST',
     headers:{'Content-type':'application/json'},
     body:JSON.stringify({name,datetime,description}),
    });
    setDatetime('');
    setDescription('');
    setName('');
  


  }
 

  let balance=0;
  for(let expense of expensedata){
    balance=balance+parseFloat(expense.name.split(' ')[0]);

  }
  
 

  return (
    <main>
      <h1>
        Rs {balance}
      </h1>
      <form onSubmit={addNewTransaction}>
        <div className="basic">
          <input
            type="text"
            placeholder="+200 New samsung Tv"
           
            
            onChange={(event) => {
              setName(event.target.value);
            }}
             value={name}
             required
          />
          <input
            type="date"
          
           
            onChange={(event) => {
              setDatetime(event.target.value);
            }} 
            value={datetime}
            required
          />
        </div>
        <div
          className="description"
          
          onChange={(event) => {
            setDescription(event.target.value);
          }} 
        >
          <input type="text" placeholder="description" value={description} required/>
        </div>
        <button type="submit">Add New Transaction</button>
      </form>
      <div className="transactions">
      {
        expensedata.map((item,index)=>{
            return <Displaydata key={index} {...item}/>

        })
     }
      </div>
    </main>
  );
};

export default App;
