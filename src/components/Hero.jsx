import React from "react";
import veg from './../assets/images/veg2.jpg';


function Hero(){
  const heroStyle = {
    boxSizing: 'border-box',
    width: '100%',
    height: 500,
    objectFit: 'cover',
  }

  return (
    <div>
      <img style={heroStyle} src={veg}/>
    </div>
  );
}

export default Hero;
