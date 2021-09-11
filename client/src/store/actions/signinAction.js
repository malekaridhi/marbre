import firebase from "../../firebase";
import {CREATE_USER}from "./type"

const  signin=async(email, password)=>{
    const user = await firebase.auth().createUserWithEmailAndPassword(email, password).catch(err => {
        console.log(err);
    });
    return user;
}
export const createUser = (email, password) => {
 
    return async function(dispatch){
      
        const user = await signin(email, password);
        console.log(user);
        dispatch({type: CREATE_USER, payload: user});
      
    
    }

}