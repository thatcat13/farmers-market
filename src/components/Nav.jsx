import React from "react";

function Nav(props){
  var navStyles = {
    fontFamily: 'sans-serif',
    listStyle: 'none'
  }
  var navItemStyles = {
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
