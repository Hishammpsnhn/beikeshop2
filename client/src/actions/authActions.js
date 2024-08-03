import axios from "axios";
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "../reducers/authReducers";

const url = "http://localhost:4000";

export const login = (email, password) => async (dispatch) => {
  dispatch(loginStart());
  try {
    const { data } = await axios.post(`${url}/api/auth/login`, {
      email,
      password,
    });
    dispatch(loginSuccess(data));
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    console.error("Error:", error);
    if (error.response && error.response.data) {
      const errorMessage = error.response.data.message;
      console.error("Server Error Message:", errorMessage);
      dispatch(loginFailure(errorMessage));
    } else {
      console.error("Generic Error");
      dispatch(loginFailure("Something went wrong"));
    }
  }
};

export const signUp =
  ({ confirmPassword, dob, email, password, phoneNumber, userName }) =>
  async (dispatch) => {
    dispatch(loginStart());
    try {
      const { data } = await axios.post(`${url}/api/auth/signUp`, {
        email,
        password,
        confirmPassword,
        dob,
        phoneNumber,
        userName,
      });
      console.log(data);
      return data;
    
    } catch (error) {
      console.error("Error:", error);
      if (error.response && error.response.data) {
        const errorMessage = error.response.data.message;
        console.error("Server Error Message:", errorMessage);
        dispatch(loginFailure(errorMessage));
      } else {
        console.error("Generic Error");
        dispatch(loginFailure("Something went wrong"));
      }
    }
  };
export const verifyOtp = (otp, formData) => async (dispatch) => {
  dispatch(loginStart());
  console.log(otp, formData);
  try {
    const { data } = await axios.post(`${url}/api/auth/verify-otp`, {
      otp,
      formData,
    });
    
    dispatch(loginSuccess(data));
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    console.error("Error:", error);
    if (error.response && error.response.data) {
      const errorMessage = error.response.data.message;
      console.error("Server Error Message:", errorMessage);
       dispatch(loginFailure(errorMessage));
    } else {
      console.error("Generic Error");
       dispatch(loginFailure("Something went wrong"));
    }
  }
};
