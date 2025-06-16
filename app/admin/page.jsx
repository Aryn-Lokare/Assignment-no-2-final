"use client";

import { useEffect, useState } from "react";
import { getProducts } from "../create/action"; // Reusing getProducts from existing actions

export default function AdminPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingProductId, setEditingProductId] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  // Function to fetch products
  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (err) {
      console.error("Error fetching products:", err);
      setError("Failed to fetch products.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  const handleEditClick = (product) => {
    setEditingProductId(product.id);
    setEditFormData(product);
  };

  const handleEditFormChange = (e) => {
    setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
  };

  const handleSaveClick = async (productId) => {
    setLoading(true);
    try {
      const response = await fetch("/api/admin/products", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: productId, ...editFormData }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to update product");
      }

      await response.json();
      setEditingProductId(null);
      setEditFormData({});
      fetchProducts(); // Refresh the list
    } catch (err) {
      console.error("Error saving product:", err);
      alert("Failed to save product: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCancelEdit = () => {
    setEditingProductId(null);
    setEditFormData({});
  };

  const handleDeleteClick = async (productId) => {
    if (confirm("Are you sure you want to delete this product?")) {
      setLoading(true);
      try {
        const response = await fetch("/api/admin/products", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: productId }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Failed to delete product");
        }

        await response.json();
        fetchProducts(); // Refresh the list
      } catch (err) {
        console.error("Error deleting product:", err);
        alert("Failed to delete product: " + err.message);
      } finally {
        setLoading(false);
      }
    }
  };

  if (loading) {
    return <div className="text-center p-10">Loading products...</div>;
  }

  if (error) {
    return <div className="text-center p-10 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8 text-black">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Admin Product Management
      </h1>
      {products.length === 0 ? (
        <p className="text-center">No products found.</p>
      ) : (
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Image
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Stock
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="px-5 py-5 text-sm">
                    {
                      editingProductId === product.id
                        ? product.id // ID is not editable
                        : product.id.substring(0, 8) + "..." // Truncate for display
                    }
                  </td>
                  <td className="px-5 py-5 text-sm">
                    {editingProductId === product.id ? (
                      <input
                        type="text"
                        name="productImage"
                        value={editFormData.productImage || ""}
                        onChange={handleEditFormChange}
                        className="p-1 border rounded w-32"
                        suppressHydrationWarning
                      />
                    ) : (
                      product.productImage && (
                        <img
                          src={product.productImage}
                          alt={product.productName}
                          className="w-16 h-16 object-cover rounded"
                        />
                      )
                    )}
                  </td>
                  <td className="px-5 py-5 text-sm">
                    {editingProductId === product.id ? (
                      <input
                        type="text"
                        name="productName"
                        value={editFormData.productName || ""}
                        onChange={handleEditFormChange}
                        className="p-1 border rounded w-full"
                        suppressHydrationWarning
                      />
                    ) : (
                      product.productName
                    )}
                  </td>
                  <td className="px-5 py-5 text-sm">
                    {editingProductId === product.id ? (
                      <input
                        type="text"
                        name="productPrice"
                        value={editFormData.productPrice || ""}
                        onChange={handleEditFormChange}
                        className="p-1 border rounded w-24"
                        suppressHydrationWarning
                      />
                    ) : (
                      `$${product.productPrice}`
                    )}
                  </td>
                  <td className="px-5 py-5 text-sm">
                    {editingProductId === product.id ? (
                      <input
                        type="text"
                        name="productCategory"
                        value={editFormData.productCategory || ""}
                        onChange={handleEditFormChange}
                        className="p-1 border rounded w-full"
                        suppressHydrationWarning
                      />
                    ) : (
                      product.productCategory
                    )}
                  </td>
                  <td className="px-5 py-5 text-sm">
                    {editingProductId === product.id ? (
                      <input
                        type="text"
                        name="productStock"
                        value={editFormData.productStock || ""}
                        onChange={handleEditFormChange}
                        className="p-1 border rounded w-16"
                        suppressHydrationWarning
                      />
                    ) : (
                      product.productStock
                    )}
                  </td>
                  <td className="px-5 py-5 text-sm max-w-xs overflow-hidden text-ellipsis whitespace-nowrap">
                    {editingProductId === product.id ? (
                      <textarea
                        name="productDescription"
                        value={editFormData.productDescription || ""}
                        onChange={handleEditFormChange}
                        className="p-1 border rounded w-full h-20 resize-y"
                        suppressHydrationWarning
                      ></textarea>
                    ) : (
                      product.productDescription
                    )}
                  </td>
                  <td className="px-5 py-5 text-sm whitespace-nowrap">
                    {editingProductId === product.id ? (
                      <div className="flex flex-col space-y-2">
                        <button
                          onClick={() => handleSaveClick(product.id)}
                          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition-colors"
                        >
                          Save
                        </button>
                        <button
                          onClick={handleCancelEdit}
                          className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600 transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <div className="flex flex-col space-y-2">
                        <button
                          onClick={() => handleEditClick(product)}
                          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteClick(product.id)}
                          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
