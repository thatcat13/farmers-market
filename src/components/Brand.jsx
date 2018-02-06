import React from "react";
import logo from './../assets/images/logo.png';
import { Link } from 'react-router-dom';

function Brand(){
  const logoStyle = {
    width: 200,
    height: 200
  }
  return (
    <div>
      <Link to="/"><img style={logoStyle} src={logo}/></Link>
    </div>
  );
}

export default Brand;
