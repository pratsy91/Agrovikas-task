import React, { useEffect, useRef, useState } from "react";
import {
  createCategory,
  getCategory,
  updateCategory,
} from "../apicalls/categoryApi";
import "./category.css";

function CategoryForm({
  editcat,
  category,
  setEditcat,
  getData,
  setCreatecat,
}) {
  const nameRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    if (editcat) {
      updateCategory(name, category._id);
      setEditcat(false);
    } else {
      createCategory(name);
      setCreatecat(false);
    }
  };
  return (
    <div className="container">
      <h1>{editcat ? "Edit Category" : "Create New Category"}</h1>
      <form onSubmit={submitHandler}>
        <label id="category">Enter Name</label>
        <input
          type="text"
          name="category"
          ref={nameRef}
          defaultValue={category ? category.name : ""}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CategoryForm;
