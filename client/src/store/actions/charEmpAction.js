import {
    GET_EMPCHARGES,
    NEW_EMPCHARGE,
    DELETE_EMPCHARGE,
  } from "./type";
  import axios from "axios";
  const base_url = "http://localhost:8000/charge-client";
  export const getChEmp = () => (dispatch) => {
    //console.log("from fetching shit")
    axios
      .get(base_url + "/")
      .then((res) => {
        // console.log(res)
        // console.log('Received posts from server: ', res.data.articles)

        dispatch({
          type: GET_EMPCHARGES,
          payload: res.data,
        });
        
      })
      .catch((error) => {
        console.error("Error fetching clients from server: ", error);
      });
  };
  export const createEmpCharge = (empcharge) => {
    //console.log("from fetching shit")
    return  (dispatch) =>{
        axios.post(base_url +"/new",empcharge)
        .then((res) => {
            
            alert(" Employer load  Added");
              
        });
        dispatch({ type: NEW_EMPCHARGE, payload : empcharge});
      
        
    }
};
  export const delChEmp = (id) => (dispatch) => {
    //console.log("from fetching shit",id)
    axios.delete(base_url+`/delete-chargecl/${id}`)
    .then(res => {
    }
    )
    dispatch({
    type: DELETE_EMPCHARGE, payload: id
})
}