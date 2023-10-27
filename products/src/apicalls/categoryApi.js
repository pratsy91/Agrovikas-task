import axios from "axios";

export const getCategories = async () => {
  try {
    const response = await axios.get("/category");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateCategory = async (name, id) => {
  try {
    const response = await axios.put("/category", {
      name,
      id,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createCategory = async (name) => {
  try {
    const response = await axios.post("/category", {
      name,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
