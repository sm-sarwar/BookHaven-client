import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const AddBooks = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    quantity: "",
    author: "",
    category: "",
    description: "",
    rating: "",
  });

  const categories = ["Fiction", "Non-Fiction", "History", "Science"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSubmit = {
      ...formData,
      quantity: Number(formData.quantity),
      rating: parseFloat(formData.rating),
    };
    // Post to the database
    fetch("https://book-haven-server-eight.vercel.app/addBook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataToSubmit),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Good job!",
          text: "Book added successfully!",
          icon: "success",
        });
        navigate("/");
      })
      .catch((error) => toast.error("Failed to add book!"));
  };

  return (
    <div>
      <Helmet>
        <title>AddBooks - BookHaven</title>
      </Helmet>
      <div className="max-w-2xl mx-auto p-6  shadow rounded my-10 bg-base-200">
        <h1 className="text-2xl font-bold mb-6 text-center text-teal-600">
          Add a New Book
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Image URL
            </label>
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
            <label className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
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
            <label className="block text-gray-700 font-semibold mb-2">
              Quantity
            </label>
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
            <label className="block text-gray-700 font-semibold mb-2">
              Author Name
            </label>
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
            <label className="block text-gray-700 font-semibold mb-2">
              Category
            </label>
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
            <label className="block text-gray-700 font-semibold mb-2">
              Short Description
            </label>
            <textarea
              name="description"
              required
              value={formData.content}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Rating
            </label>
            <input
              type="number"
              required
              name="rating"
              value={formData.rating}
              min="1"
              max="5"
              step="0.1"
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg text-teal-600 flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-teal-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10  overflow-hidden border-2  group py-2 px-4  hover:bg-teal-600 transition duration-300"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBooks;
