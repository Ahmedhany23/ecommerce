"use client";
import { useState } from "react";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
export default function CreateProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [rate, setRate] = useState("");
  const [images, setImages] = useState([]);
  const [confirmed, setConfirmed] = useState(false);
  const [user] = useAuthState(auth);

  const router = useRouter();

  const handleFileChange = (event) => {
    setImages(event.target.files);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("Brand", brand);
    formData.append("rate", rate);

    for (const file of images) {
      formData.append("images", file); // Append images to the formData
    }

    try {
      const response = await axios.post(
        `${process.env.base_URL}products`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Product created successfully:", response.data);
      // Reset form fields
      setTitle("");
      setDescription("");
      setCategory("");
      setPrice("");
      setBrand("");
      setRate("");
      setImages([]);
      setConfirmed(true);
      setTimeout(() => {
        setConfirmed(false);
      }, 2000);
    } catch (error) {
      console.error("Error creating product:", error);
      setConfirmed(false);
    }
  };

  if (!user) {
    router.push("/");
  }

  if (user) {
    if (user.email === process.env.admin_email) {
      return (
        <main className="container mx-auto">
          <h1 className="text-center text-3xl text-laccent">Create Product</h1>
          <form
            encType="multipart/form-data"
            onSubmit={handleSubmit}
            className="max-w-md mx-auto mt-8 p-4 border rounded shadow-lg"
          >
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-lg font-medium text-ltext"
              >
                Title:
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full mt-1 p-2 border border-gray-300 rounded"
                placeholder="Enter product title"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-lg font-medium text-ltext"
              >
                Description:
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full mt-1 p-2 border border-gray-300 rounded"
                placeholder="Enter product description"
                required
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="category"
                className="block text-lg font-medium text-ltext"
              >
                Category:
              </label>
              <input
                type="text"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full mt-1 p-2 border border-gray-300 rounded"
                placeholder="Enter product category"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="price"
                className="block text-lg font-medium text-ltext"
              >
                Price:
              </label>
              <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full mt-1 p-2 border border-gray-300 rounded"
                placeholder="Enter product price"
                step="0.01"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="brand"
                className="block text-lg font-medium text-ltext"
              >
                Brand:
              </label>
              <input
                type="text"
                id="brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="w-full mt-1 p-2 border border-gray-300 rounded"
                placeholder="Enter product brand"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="rate"
                className="block text-lg font-medium text-ltext"
              >
                Rate:
              </label>
              <input
                type="number"
                id="rate"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                className="w-full mt-1 p-2 border border-gray-300 rounded"
                placeholder="Enter product rating"
                step="0.1"
                min="0"
                max="5"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="images"
                className="block text-lg font-medium text-ltext"
              >
                Images:
              </label>
              <input
                type="file"
                id="images"
                multiple
                required
                onChange={handleFileChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded text-ltext"
                accept="image/*"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-lsecondary hover:bg-laccent text-white py-2 px-4 rounded"
            >
              Create Product
            </button>
          </form>
          {confirmed && (
            <motion.div
              initial={{ x: -200 }}
              animate={{ x: 0 }}
              className="text-laccent  absolute top-6 left-0 px-10 py-4 bg-ltext"
            >
              Product Created Successfully
            </motion.div>
          )}
        </main>
      );
    } else {
      router.push("/");
    }
  }
}
