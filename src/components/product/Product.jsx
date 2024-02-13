import React from "react";
import "./product.css";

const Product = ({ img, link }) => {
  return (
    <div className="product">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <div className="p-img-wrapper">
        <a href={link} target="_blank" rel="noreferrer">
          <img src={img} alt="" className="p-img" />
        </a>
      </div>
    </div>
  );
};

export default Product;
