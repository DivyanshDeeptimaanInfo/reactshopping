import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const IShopProducts = () => {
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);

  let params = useParams();
  useEffect(() => {
    setCategory(params.category);
    axios
      .get("http://localhost:4545/getproducts")
      .then((response) => setProducts(response.data));
  });
  return (
    <div>
      <h2>{category} List</h2>
      <ol>
        {products
          .filter((item) => item.category === category)
          .map((product) => (
            <li key={product._id}>
              <img height="50" src={product.image} alt={product.image} />
              <div>
                <Link to={"/details/" + product._id}>{product.title}</Link>
              </div>
            </li>
          ))}
      </ol>
      <div>
        <Link to="/dashboard">Back to Categories</Link>
      </div>
    </div>
  );
};

export default IShopProducts;
