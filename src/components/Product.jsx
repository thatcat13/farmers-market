import React from "react";
import PropTypes from "prop-types";

function Product(props){
  const productListStyle = {
    listStyle: 'none',
    padding: 0
  }
  return (
    <div>
      <h3>{props.month}</h3>
      <ul style={productListStyle}>
        {props.selection.map((selection, index) =>
          <li key={index}>{selection}</li>
        )}
      </ul>
      <hr/>
    </div>
  );
}

Product.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.array
};

export default Product;
