import React from "react";

function Nav(props){
  const navContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end'
  }

  const navStyles = {
    fontFamily: 'sans-serif',
    listStyle: 'none',
    height: '100%',
    display: 'flex',
    alignItems: 'center'
  }
  const navItemStyles = {
    display: 'inline',
    marginRight: 20,
    marginLeft: 20,
    fontSize: 25
  }

  return (
    <div style={navContainerStyles}>
      <ul style={navStyles}>
        <li style={navItemStyles}>Markets</li>
        <li style={navItemStyles}>Products</li>
      </ul>
    </div>
  );
}

export default Nav;
