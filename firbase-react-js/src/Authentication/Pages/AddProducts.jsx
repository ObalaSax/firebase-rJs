import { useState } from "react";
import { myDatabase } from "../../Resources/firebase";
import { collection, addDoc } from "firebase/firestore";

function AddProducts() {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState(0);

  const DatabaseRef = collection(myDatabase, "products");
  const addProduct = async () => {
    await addDoc(DatabaseRef, {
      productDescription: productDescription,
      productName: productName,
      productPrice: productPrice,
    });
    alert("Anguka Nayo");
  };
  return (
    <div className="addProducts-container">
      <div className="addProductInput">
        <h1>Add Product</h1>
        <div className="productName">
          <label htmlFor="label">Product Name</label>
          <input
            type="text"
            placeholder="Product Name"
            required
            onChange={(event) => setProductName(event.target.value)}
          />
        </div>
        <div className="productDescription">
          <label htmlFor="label">Product Description</label>
          <input
            type="text"
            placeholder="Product Description"
            required
            onChange={(event) => setProductDescription(event.target.value)}
          />
        </div>
        <div className="productPrice">
          <label htmlFor="label">Product Price</label>
          <input
            type="number"
            placeholder="Product Price"
            required
            onChange={(event) => setProductPrice(Number(event.target.value))}
          />
        </div>
        <button className="addProd-btn" onClick={addProduct}>
          Add Product
        </button>
      </div>
    </div>
  );
}

export default AddProducts;
