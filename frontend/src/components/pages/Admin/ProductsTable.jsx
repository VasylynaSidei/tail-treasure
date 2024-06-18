import React, { useEffect, useState } from "react";
import "./adminTable.scss";
import AdminSideBar from "./AdminSidebar.jsx";
import {
  fetchProducts,
  deleteProduct,
  addProduct,
  editProduct,
} from "../../../Helpers/fetchProducts.js";
const ProductsTable = () => {
  const [products, setProducts] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    category: "",
    image: "",
    isFeatured: false, // Add isFeatured state
  });
  const [editedProduct, setEditedProduct] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getProducts();
  }, []);

  const handleDeleteProduct = async (productId) => {
    try {
      await deleteProduct(productId);
      const productsData = await fetchProducts();
      setProducts(productsData);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    if (newProduct.price <= 0 || newProduct.quantity <= 0) {
      alert("Price and Quantity should be greater than zero.");
      return;
    }
    try {
      await addProduct(newProduct);
      setNewProduct({
        name: "",
        description: "",
        price: "",
        quantity: "",
        category: "",
        image: "",
        isFeatured: false, // Reset isFeatured state after adding
      });
      const productsData = await fetchProducts();
      setProducts(productsData);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleEditProduct = async (e) => {
    e.preventDefault();
    if (editedProduct.price <= 0 || editedProduct.quantity <= 0) {
      alert("Price and Quantity should be greater than zero.");
      return;
    }
    try {
      await editProduct(editedProduct._id, editedProduct);
      setEditedProduct(null);
      const productsData = await fetchProducts();
      setProducts(productsData);
    } catch (error) {
      console.error("Error editing product:", error);
    }
  };

  const searchProductHandler = (event) => {
    setSearchProduct(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    `${product.name}`.toLowerCase().includes(searchProduct.toLowerCase())
  );

  return (
    <section className="table-container">
      <AdminSideBar />
      <div className="table-wrapper">
        <h1 className="table-title">
          <input
            type="text"
            placeholder="Search by product"
            value={searchProduct}
            onChange={searchProductHandler}
          />
          <form onSubmit={handleAddProduct} className="table-form">
            <input
              type="text"
              placeholder="Name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Description"
              value={newProduct.description}
              onChange={(e) =>
                setNewProduct({ ...newProduct, description: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Price"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  price: Math.max(0, e.target.value),
                })
              }
            />
            <input
              type="number"
              placeholder="Quantity"
              value={newProduct.quantity}
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  quantity: Math.max(0, e.target.value),
                })
              }
            />
            <input
              type="text"
              placeholder="Category"
              value={newProduct.category}
              onChange={(e) =>
                setNewProduct({ ...newProduct, category: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Image URL"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            />
            <label>
              Featured:
              <input
                type="checkbox"
                checked={newProduct.isFeatured}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, isFeatured: e.target.checked })
                }
              />
            </label>
            <button type="submit">Add Product</button>
          </form>
          <table className="table">
            <thead className="table-head">
              <tr>
                <th>Count</th>
                <th>Product Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="table-body">
              {filteredProducts.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <b>{item.name}</b>
                  </td>
                  <td>
                    <div className="table-button-group">
                      <button onClick={() => setEditedProduct(item)}>
                        Edit Product
                      </button>
                      <button onClick={() => handleDeleteProduct(item._id)}>
                        Remove Product
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </h1>
      </div>
      {editedProduct && (
        <form onSubmit={handleEditProduct}>
          <input
            type="text"
            placeholder="Name"
            value={editedProduct.name}
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, name: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Description"
            value={editedProduct.description}
            onChange={(e) =>
              setEditedProduct({
                ...editedProduct,
                description: e.target.value,
              })
            }
          />
          <input
            type="number"
            placeholder="Price"
            value={editedProduct.price}
            onChange={(e) =>
              setEditedProduct({
                ...editedProduct,
                price: Math.max(0, e.target.value),
              })
            }
          />
          <input
            type="number"
            placeholder="Quantity"
            value={editedProduct.quantity}
            onChange={(e) =>
              setEditedProduct({
                ...editedProduct,
                quantity: Math.max(0, e.target.value),
              })
            }
          />
          <input
            type="text"
            placeholder="Category"
            value={editedProduct.category}
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, category: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Image URL"
            value={editedProduct.image}
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, image: e.target.value })
            }
          />
          <label>
            Featured:
            <input
              type="checkbox"
              checked={editedProduct.isFeatured}
              onChange={(e) =>
                setEditedProduct({
                  ...editedProduct,
                  isFeatured: e.target.checked,
                })
              }
            />
          </label>
          <button type="submit">Update Product</button>
          <button type="button" onClick={() => setEditedProduct(null)}>
            Cancel
          </button>
        </form>
      )}
    </section>
  );
};

export default ProductsTable;
