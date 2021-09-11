import {
    GET_PRODUCTS,
    NEW_PRODUCT,
    DELETE_PRODUCT,
    ONE_PRODUCTS,
  } from "./type";
  import axios from "axios";
  const base_url = "http://localhost:8000/products";
  export const getProducts = () => (dispatch) => {
    //console.log("from fetching shit")
    axios
      .get(base_url + "/")
      .then((res) => {
        // console.log(res)
        // console.log('Received posts from server: ', res.data.articles)

        dispatch({
          type: GET_PRODUCTS,
          payload: res.data,
        });
        
      })
      .catch((error) => {
        console.error("Error fetching clients from server: ", error);
      });
  };
  export const getOneProducts = (id) => (dispatch) => {
   // console.log("from the data fetching shit")
    axios
      .get(base_url +`/${id}`)
      .then((res) => {
        // console.log(res)
        // console.log('Received posts from server: ', res.data.articles)

        dispatch({
          type: ONE_PRODUCTS,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.error("Error fetching clients from server: ", error);
      });
  };
  export const createProduct = (product) => {
  //  console.log("from fetching shit")
    return  (dispatch) =>{
        axios.post(base_url +"/new",product)
        .then((res) => {
            
            alert(" product Added");
              
        });
        dispatch({ type: NEW_PRODUCT, payload : product});
      
        
    }
};
  export const delProduct = (id) => (dispatch) => {
    //console.log("from fetching shit",id)
    axios.delete(base_url+`/delete-product/${id}`)
    .then(res => {
    }
    )
    dispatch({
    type: DELETE_PRODUCT, payload: id
})
}