// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const IShopProductDetails = () => {
//   const [product, setProduct] = useState([]);
//   let params = useParams();
//   useEffect(() => {
//       let id = parseInt(params._id);
//       console.log(id)
//     axios.get(`http://localhost:4545/getproduct/${id}`).then(response=>setProduct(response.data));
//   }, []);
//   return (
//     <div>
//       <h2>Product Details</h2>
//     </div>
//   );
// };

// export default IShopProductDetails;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const IShopProductDetails = () => {
  const [product, setProduct] = useState([]); // Set to `null` instead of an empty array
  let params = useParams();

  useEffect(() => {
    let id = params._id; // Keep `_id` as string
    // console.log(id);

    axios
      .get(`http://localhost:4545/getproduct/${id}`)
      .then((response) => setProduct(response.data[0]))
      .catch((error) => console.error("Error fetching product:", error));
  }, [params._id]); // Runs effect when `_id` changes

  return (
    <div>
      <h2>Product Details</h2>
      {/* {product ? (
        <div>
          <h3>{product.title}</h3>
          <p>Price: ${product.price}</p>
          <p>Description: {product.description}</p>
        </div>
      ) : (
        <p>Loading product details...</p>
      )} */}
      <div className="card w-25">
        <div className="card-header">
          <h3>{product.title}</h3>
          <img
            className="card-img-top"
            height="250"
            src={product.image}
            alt={product.image}
          />
        </div>
        <div className="card-body">
          <p>Price: ${product.price}</p>
          <p>Description: {product.description}</p>
          <p>
            Rating: {product?.rating?.rate || "No rating available"}&nbsp;[
            {product?.rating?.count || "No count available"}]
          </p>
          {/* <p>Rating { product.rating.rate}</p> */}
        </div>
      </div>
    </div>
  );
};

export default IShopProductDetails;
