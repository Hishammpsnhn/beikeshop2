import axios from 'axios';
import { fetchProductStart,addProductSuccess,deleteProductSuccess,fetchProductFailure,fetchProductSuccess } from '../reducers/productReducers';

const url = 'http://localhost:4000'; 


export const getProductsList = () => async (dispatch) => {
    dispatch(fetchProductStart());
    try {
      const { data } = await axios.get(`${url}/api/admin/product`);
      console.log(data);
      dispatch(fetchProductSuccess(data));
    } catch (error) {
      console.error("Error:", error);
      if (error.response && error.response.data) {
        const errorMessage = error.response.data.message;
        console.error("Server Error Message:", errorMessage);
        dispatch(fetchProductFailure(errorMessage));
      } else {
        console.error("Generic Error");
        dispatch(fetchProductFailure("Something went wrong"));
      }
    }
  };

export const deleteProduct = (id) => async (dispatch) => {
    dispatch(fetchProductStart());
    try {
      const { data } = await axios.delete(`${url}/api/admin/product/${id}`);
      
      dispatch(deleteProductSuccess(data.product));
    } catch (error) {
      console.error("Error:", error);
      if (error.response && error.response.data) {
        const errorMessage = error.response.data.message;
        console.error("Server Error Message:", errorMessage);
        dispatch(fetchProductFailure(errorMessage));
      } else {
        console.error("Generic Error");
        dispatch(fetchProductFailure("Something went wrong"));
      }
    }
  };
export const uploadFile = async(formdata,files,setUploadProgress) =>  {
    //dispatch(fetchProductStart());
    try {
      console.log(files)
      const fd = new FormData();
    for (let i = 0; i < files.length; i++) {
      fd.append('files', files[i]);
    }
      console.log(fd)
      const { data } = await axios.post(`${url}/api/upload`,fd,{
        onUploadProgress: (progressEvent) => {
          setUploadProgress(progressEvent.progress*100)
        },
      });
      return data;
     // dispatch(deleteProductSuccess(data.product));
    } catch (error) {
      console.error("Error:", error);
      if (error.response && error.response.data) {
        const errorMessage = error.response.data.message;
        console.error("Server Error Message:", errorMessage);
       // dispatch(fetchProductFailure(errorMessage));
      } else {
        console.error("Generic Error");
       // dispatch(fetchProductFailure("Something went wrong"));
      }
    }
  };