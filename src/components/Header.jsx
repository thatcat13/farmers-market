import React from "react";
import Nav from "./Nav";
import Brand from "./Brand";

function Header(props){
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'honeydew',
  }

  const siteHeader = {
    fontSize: '3em',
    paddingTop: 40
  }
  return (
    <div style={headerStyle}>
      <Brand/>
        <div>
          <h1 style={siteHeader}>Avery Organics</h1>
        </div>
      <Nav/>
    </div>
  );
}

export default Header;
