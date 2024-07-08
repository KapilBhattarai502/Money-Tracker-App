import React, { useState } from "react";
import "./App.css";
const App = () => {
  const[name,setName]=useState('');
  return (
    <main>
      <h1>
        $400<span>.00</span>
      </h1>
      <form>
        <div className="basic">
          <input type="text" placeholder="+200 New samsung Tv" />
          <input type="date" />
        </div>
        <div className="description">
          <input type="text" placeholder="description" />
        </div>
        <button type="submit">Add New Transaction</button>
      </form>
      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">New samsung Tv</div>
            <div className="description">It was time for new Tv</div>

          </div>
          <div className="right">
          <div className="price red">-$500</div>
          <div className="datetime">2024-12-18 15:45</div>


          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Ecommerce Website</div>
            <div className="description">built a Ecommerce website for dad</div>

          </div>
          <div className="right">
          <div className="price green">$500</div>
          <div className="datetime">2024-12-18 15:45</div>


          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Washing Machine</div>
            <div className="description">It was time for new washing machine</div>

          </div>
          <div className="right red">
          <div className="price">-$900</div>
          <div className="datetime">2024-12-18 15:45</div>
          


          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
