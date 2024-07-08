import React from "react";

const Displaydata = (props) => {
  const { name, datetime, description, createdAt, updatedAt } = props;
  const price = name.split(" ")[0];
  
 



  return (
    <div className="transaction">
      <div className="left">
        <div className="name">{name.substring(price.length + 1)}</div>
        <div className="description">{description}</div>
      </div>
      <div className="right">
        <div className={`price ${price > 0 ? "green" : "red"}`}>{price}</div>

        <div className="datetime">{datetime}</div>
      </div>
    </div>
  );
};

export default Displaydata;
