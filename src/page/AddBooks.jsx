import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

const AddBooks = () => {
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    image: '',
    name: '',
    quantity: '',
    author: '',
    category: '',
    description: '',
    rating: '',
  });

  const categories = ['Fiction', 'Non-Fiction', 'History', 'Science'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Post to the database
    fetch('http://localhost:5000/addBook', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
            title: "Good job!",
            text: "Visa added successfully!",
            icon: "success"
          });
          navigate('/');
      })
      .catch((error) => toast.error('Failed to add book!'));
  };

  return (
    <div className="max-w-2xl mx-auto p-6  shadow rounded my-10 bg-base-200">
      <h1 className="text-2xl font-bold mb-6 text-center text-teal-600">Add a New Book</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Image URL</label>
          <input
            type="text"
            name="image"
            required
            value={formData.image}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Quantity</label>
          <input
            type="number"
            name="quantity"
            required
            value={formData.quantity}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Author Name</label>
          <input
            type="text"
            name="author"
            required
            value={formData.author}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Category</label>
          <select
            name="category"
            value={formData.category}
            required
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select a category</option>
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Short Description</label>
          <textarea
            name="description"
            required
            value={formData.description}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Rating</label>
          <input
            type="number"
            required
            name="rating"
            value={formData.rating}
            min="1"
            max="5"
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-teal-600 w-full text-white px-4 py-2 rounded hover:bg-cyan-700"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBooks;
