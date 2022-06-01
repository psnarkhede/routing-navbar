import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Errpage from "./Errpage";

const Product = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3010/products/${id}`)
        .then((res) => res.json())
        .then((res) => setProduct(res));
    }
  }, [id]);
  return (
    <div>
      <div>{id == "undefined" ? <Errpage /> : <div key={product.id}>
        {product.name} : {product.price}
      </div>}</div>
      
    </div>
  );
};

export default Product;
