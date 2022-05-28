import axios from "axios";
import React, { useEffect, useState } from "react";
import URL from "../../API";
import { toast } from "react-toastify";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(URL + "/api/products")
      .then((res) => {
        if (res.data.status === 1) {
          setProducts(res.data.products);
        } else {
          toast.error("Failed to get products");
        }
      })
      .catch((err) => {
        toast.error("Failed to get products");
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .post(URL + "/api/delete-product?id=" + id, {})
      .then((res) => {
        if (res.data.status === 1) {
          toast.success("Product deleted successfully");
          setProducts(products.filter((product) => product._id !== id));
        } else {
          toast.error("Failed to delete product");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Manage Products</h1>
      <ul>
        {products.map((item, index) => (
          <li key={index}>
            <div className="flex">
              <div className="w-1/3">
                Name: {item.name}
                <br />
                Price: {item.price}
                <br />
                In Stock: {item.in_stock}
                <br />
                <button onClick={() => handleDelete(item._id)}>Delete</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageProducts;
