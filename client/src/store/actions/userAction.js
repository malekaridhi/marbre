import {
    GET_CLIENTS,
    NEW_CLIENT,
    DELETE_CLIENT,
  } from "./type";
  import axios from "axios";
  
  const base_url = "http://localhost:8000/clients";
  export const getClient  = () => (dispatch) => {
    //console.log("from fetching shit")
    axios
     .get(base_url + "/")
      .then((res) => {
        // console.log(res)
        // console.log('Received posts from server: ', res.data.articles)

        dispatch({
          type: GET_CLIENTS,
          payload: res.data,
        });
        
         
  
      })
      .catch((error) => {
        console.error("Error fetching clients from server: ", error);
      });
  };
  
  export const createclient = (client) => {
    console.log("from fetching shit")
    return  (dispatch) =>{
        axios.post(base_url +"/new",client)
        .then((res) => {
            
            alert(" client Added");
              
        });
        dispatch({ type: NEW_CLIENT, payload : client});
      
        
    }
};
  export const delClient = (id) => (dispatch) => {
    console.log("from fetching shit",id)
    axios.delete(base_url+`/delete-client/${id}`)
    .then(res => {
    }
    )
    dispatch({
    type: DELETE_CLIENT, payload: id
})
}