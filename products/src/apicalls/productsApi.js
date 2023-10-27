import axios from "axios";

export const getProducts = async (id) => {
  try {
    const response = await axios.post("/products", {
      id,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateProduct = async (
  name,
  image,
  discount,
  rating,
  category,
  price,
  id
) => {
  try {
    const response = await axios.put("/products/edit", {
      name,
      image,
      discount,
      rating,
      category,
      price,
      id,
    });
  } catch (error) {
    throw error;
  }
};

export const createProduct = async (
  name,
  image,
  discount,
  rating,
  category,
  price
) => {
  try {
    const response = await axios.post("/products/edit", {
      name,
      image,
      discount,
      rating,
      category,
      price,
    });
  } catch (error) {
    throw error;
  }
};
