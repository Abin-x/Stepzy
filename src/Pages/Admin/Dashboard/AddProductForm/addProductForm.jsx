import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './addProductForm.css';

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    stock: '',
  });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // Handle text input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle image input change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const adminId = localStorage.getItem('adminId');
      if (!adminId) {
        setMessage('⚠️ Admin not logged in!');
        setTimeout(() => navigate('/admin/login'), 2000);
        return;
      }

      // Create FormData for multipart upload
      const data = new FormData();
      data.append('name', formData.name);
      data.append('description', formData.description);
      data.append('price', formData.price);
      data.append('category', formData.category);
      data.append('stock', formData.stock);
      data.append('adminId', adminId);
      if (image) data.append('image', image);

      // Send request to backend
      const res = await axios.post(
        'http://localhost:3000/api/products/add',
        data,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );

      setMessage('✅ Product added successfully!');
      console.log(res.data);

      // Reset form
      setFormData({
        name: '',
        description: '',
        price: '',
        category: '',
        stock: '',
      });
      setImage(null);
      setPreview('');

      // Optionally navigate after adding product
      // navigate('/admin/products');
    } catch (err) {
      console.error(err);
      setMessage('❌ ' + (err.response?.data?.error || 'Something went wrong'));
    }
  };

  return (
    <div className="add-product-container">
      <h2>Add New Product</h2>
      {message && <p className="message">{message}</p>}

      <form
        onSubmit={handleSubmit}
        className="add-product-form"
        encType="multipart/form-data"
      >
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Product Description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock Quantity"
          value={formData.stock}
          onChange={handleChange}
          required
        />

        {/* Image upload */}
        <input type="file" accept="image/*" onChange={handleImageChange} />

        {/* Preview uploaded image */}
        {preview && (
          <div className="image-preview">
            <img src={preview} alt="Preview" />
          </div>
        )}

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductForm;
