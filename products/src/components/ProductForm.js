import React, { useRef } from "react";
import "./product.css";
import { createProduct, updateProduct } from "../apicalls/productsApi";

function ProductForm({ edit, product, setEdit, setCreate, categories }) {
  const nameRef = useRef();
  const imageRef = useRef();
  const catRef = useRef();
  const ratRef = useRef();
  const priceRef = useRef();
  const disRef = useRef();

  const cancelHandler = () => {
    if (edit) {
      setEdit(false);
      return;
    }

    setCreate(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const image = imageRef.current.value;
    const category = catRef.current.value;
    const rating = ratRef.current.value;
    const price = priceRef.current.value;
    const discount = disRef.current.value;
    if (edit) {
      updateProduct(
        name,
        image,
        discount,
        rating,
        category,
        price,
        product._id
      );
      setEdit(false);
    } else {
      setCreate(false);
      createProduct(name, image, discount, rating, category, price);
    }
  };
  return (
    <div className="container">
      <h1>{edit ? "Edit Product" : "Create New Product"}</h1>
      <form onSubmit={submitHandler}>
        <label id="name">Enter Name</label>
        <input
          type="text"
          name="name"
          ref={nameRef}
          defaultValue={edit ? product.name : ""}
        />
        <label id="image">Enter ImageUrl</label>
        <input
          type="text"
          name="image"
          ref={imageRef}
          defaultValue={edit ? product.image : ""}
        />
        <label id="category">Select Category</label>
        <select
          name="category"
          defaultValue={edit ? product.category : "Choose Option"}
          ref={catRef}
        >
          {categories.map((cat) => (
            <option value={cat._id} key={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>
        <label id="rating">Enter rating</label>
        <input
          type="number"
          name="rating"
          ref={ratRef}
          min="1"
          max="5"
          defaultValue={edit ? product.rating : "1"}
        />
        <label id="price">Enter price</label>
        <input
          type="text"
          name="price"
          ref={priceRef}
          defaultValue={edit ? product.price : "0"}
        />
        <label id="discount">Enter discount</label>
        <input
          type="number"
          name="discount"
          ref={disRef}
          defaultValue={edit ? product.discount : "0"}
        />
        <div className="button">
          <button type="submit">Submit</button>
          <button type="button" className="cancel " onClick={cancelHandler}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductForm;
