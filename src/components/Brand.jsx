import React from "react";
import logo from './../assets/images/logo.png';

function Brand(){
  const logoStyle = {
    width: 200,
    height: 200
  }
  return (
    <div>
      <img style={logoStyle} src={logo}/>
    </div>
  );
}

export default Brand;
