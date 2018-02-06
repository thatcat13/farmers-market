import React from "react";
import PropTypes from "prop-types";

function Product(props){
  return (
    <div>
      <h3>{props.month}</h3>
      <ul>
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
