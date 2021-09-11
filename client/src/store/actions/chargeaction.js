import {
    GET_CHARGES,
    NEW_CHARGE,
    DELETE_CHARGE,
  } from "./type";
  import axios from "axios";
  const base_url = "http://localhost:8000/charge";
  export const getCharge = () => (dispatch) => {
    //console.log("from fetching shit")
    axios
      .get(base_url + "/")
      .then((res) => {
        // console.log(res)
        // console.log('Received posts from server: ', res.data.articles)

        dispatch({
          type: GET_CHARGES,
          payload: res.data,
        });
        
      })
      .catch((error) => {
        console.error("Error fetching clients from server: ", error);
      });
  };
  export const createCharge = (charge) => {
    //console.log("from fetching shit")
    return  (dispatch) =>{
        axios.post(base_url +"/new",charge)
        .then((res) => {
            
            alert(" charge Added");
              
        });
        dispatch({ type: NEW_CHARGE, payload : charge});
      
        
    }
};
  export const delCharge = (id) => (dispatch) => {
    //console.log("from fetching shit",id)
    axios.delete(base_url+`/delete-charge/${id}`)
    .then(res => {
    }
    )
    dispatch({
    type: DELETE_CHARGE, payload: id
})
}