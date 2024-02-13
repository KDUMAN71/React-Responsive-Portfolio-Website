import React from "react";
import "./productList.css";
import Product from "../product/Product";
import { Products } from "../../products";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h2 className="pl-title">Premium Dijital Reklam Ajansı Farkıyla</h2>
        <p className="pl-desc">
          Modern ve responsive tasarımlar ile mutlu müşteriler{" "}
        </p>
      </div>
      <div className="pl-pr">
        {Products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
