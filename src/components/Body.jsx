import React from "react";
import MarketList from "./MarketList";
import ProductList from "./ProductList"

function Body(props){
  var bodyStyle = {
    display: 'flex',
    justifyContent: 'space-between',
  }
  return (
    <div style={bodyStyle}>
      <ProductList />
      <MarketList />
    </div>
  );
}

export default Body;
