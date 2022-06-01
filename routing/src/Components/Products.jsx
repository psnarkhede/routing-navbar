import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./Products.module.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(" http://localhost:3010/products")
      .then((res) => res.json())
      .then((res) => setProducts(res));
  }, []);
  return (
    <div className={styles.box}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <div>
          {products.map((el) => (
            <div className={styles.comp} key={el.name}>
              {el.name} : {el.price}
              <Link to={`/products/${el.id}`}>More Details</Link>
            </div>
          ))}
        </div>
        <div className={styles.out}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Products;
