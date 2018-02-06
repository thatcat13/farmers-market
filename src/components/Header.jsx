import React from "react";
import Nav from "./Nav";
import Brand from "./Brand";

function Header(props){
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'honeydew'
  }
  return (
    <div style={headerStyle}>
      <Brand/>
      <Nav/>
    </div>
  );
}

export default Header;
