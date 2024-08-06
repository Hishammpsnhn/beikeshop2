import axios from "axios";
import {
  addCategorySuccess,
  deleteCategoriesSuccess,
  fetchCategoryFailure,
  fetchCategoryStart,
  fetchCategorySuccess,
} from "../reducers/categoryReducers";

const url = "http://localhost:4000";

export const addCategory = (name, description) => async (dispatch) => {
  dispatch(fetchCategoryStart());
  try {
    const { data } = await axios.post(`${url}/api/admin/category`, {
      name,
      description,
    });
    console.log(data);
    dispatch(addCategorySuccess(data));
  } catch (error) {
    console.error("Error:", error);
    if (error.response && error.response.data) {
      const errorMessage = error.response.data.message;
      console.error("Server Error Message:", errorMessage);
      dispatch(fetchCategoryFailure(errorMessage));
    } else {
      console.error("Generic Error");
      dispatch(fetchCategoryFailure("Something went wrong"));
    }
  }
};

export const getCategories = () => async (dispatch) => {
  dispatch(fetchCategoryStart());
  try {
    const { data } = await axios.get(`${url}/api/admin/category`);
    console.log(data);
    dispatch(fetchCategorySuccess(data));
  } catch (error) {
    console.error("Error:", error);
    if (error.response && error.response.data) {
      const errorMessage = error.response.data.message;
      console.error("Server Error Message:", errorMessage);
      dispatch(fetchCategoryFailure(errorMessage));
    } else {
      console.error("Generic Error");
      dispatch(fetchCategoryFailure("Something went wrong"));
    }
  }
};

export const deleteCategories = (id) => async (dispatch) => {
  dispatch(fetchCategoryStart());
  try {
    const { data } = await axios.delete(`${url}/api/admin/category/${id}`);
    console.log(data);
    dispatch(deleteCategoriesSuccess(data?.category));
  } catch (error) {
    console.error("Error:", error);
    if (error.response && error.response.data) {
      const errorMessage = error.response.data.message;
      console.error("Server Error Message:", errorMessage);
      dispatch(errorMessage);
    } else {
      console.error("Generic Error");
      dispatch(fetchCategoryFailure("Something went wrong"));
    }
  }
};
