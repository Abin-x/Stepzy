import React, { useEffect, useState } from "react";
import axios from "axios";
import "./productList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/products/get");
        setProducts(res.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch products");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="product-list-container">
      <h2>📦 Product List</h2>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <table className="product-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price ($)</th>
              <th>Category</th>
              <th>Stock</th>
              <th>Admin</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p._id}>
                <td>{p.name}</td>
                <td>{p.description}</td>
                <td>{p.price}</td>
                <td>{p.category}</td>
                <td>{p.stock}</td>
                <td>
                  {p.adminId
                    ? `${p.adminId.name} (${p.adminId.email})`
                    : "No Admin"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductList;
