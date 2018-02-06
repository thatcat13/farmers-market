import React from "react";

function Nav(props){
  const navStyles = {
    fontFamily: 'sans-serif',
    listStyle: 'none'
  }
  const navItemStyles = {
    display: 'inline',
    marginRight: 20,
    marginLeft: 20
  }

  return (
    <div>
      <ul style={navStyles}>
        <li style={navItemStyles}>Markets</li>
        <li style={navItemStyles}>Products</li>
      </ul>
    </div>
  );
}

export default Nav;
