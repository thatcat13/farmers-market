import React from "react";
import PropTypes from "prop-types";

function Product(props){
  return (
    <div>
      <h3>{props.month}</h3>
      <p><em>{props.selection}</em></p>
      <hr/>
    </div>
  );
}

Product.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.string
};

export default Product;
