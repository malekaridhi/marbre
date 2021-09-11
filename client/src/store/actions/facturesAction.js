import {
    GET_FACTURES,
    NEW_FACTURE,
    DELETE_FACTURE,
    ONE_FACTURE,
  } from "./type";
  import axios from "axios";
  const base_url = "http://localhost:8000/facture";
  export const getFacture = () => (dispatch) => {
    //console.log("from fetching shit")
    axios
      .get(base_url + "/")
      .then((res) => {
        // console.log(res)
        // console.log('Received posts from server: ', res.data.articles)

        dispatch({
          type: GET_FACTURES,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.error("Error fetching clients from server: ", error);
      });
  };
  export const getOneFacture = (id) => (dispatch) => {
   // console.log("from  fetching some data shit")
    axios
      .get(base_url +`/${id}`)
      .then((res) => {
        // console.log(res)
        //console.log('Received posts from server: ', res.data.articles)

        dispatch({
          type: ONE_FACTURE,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.error("Error fetching clients from server: ", error);
      });
  };
  export const createFacture = (facture) => {
    //console.log("from fetching shit")
    return  (dispatch) =>{
        axios.post(base_url +"/new",facture)
        .then((res) => {
            
            alert(" facture Added");
              
        });
        dispatch({ type: NEW_FACTURE, payload : facture});
      
        
    }
};
  export const delFacture = (id) => (dispatch) => {
    //console.log("from fetching shit",id)
    axios.delete(base_url+`/delete/${id}`)
    .then(res => {
    }
    )
    dispatch({
    type: DELETE_FACTURE, payload: id
})
}