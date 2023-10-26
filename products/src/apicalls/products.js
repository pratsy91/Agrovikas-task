import axios from "axios";

export const getCategories = async () => {
  try {
    const response = await axios.get("/category");
    return response.data;
  } catch (error) {
    throw error;
  }
};

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
