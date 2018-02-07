import React from "react";
import MarketList from "./MarketList";
import ProductList from "./ProductList";
import Hero from "./Hero";
import About from "./About";


function Body(props){
  const bodyStyle = {
    display: 'flex',
    flexDirection: 'column',

  }
  return (
    <div>
      <Hero />
      <About />
    </div>
  );
}

export default Body;
