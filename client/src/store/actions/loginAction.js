import firebase from "../../firebase";
import {LOGIN_USER,CREATE_USER,LOGOUT_USER}from "./type"
const login=async(email, password)=>{
    const user = await firebase.auth().signInWithEmailAndPassword(email, password).catch(err => {
    console.log(err);
    });
    return user;
}
const logout=async()=>{
    const logout = await firebase.auth().signOut().catch(err => console.log(err));
    return logout;
}
export const loginUser = (email, password) => {
 
    return async function(dispatch){
        const user = await login(email, password).catch(err => console.log(err));
        
        if(user){
            
            dispatch({type: LOGIN_USER, payload: user});
            return user;
        }        
    }
 

}

export const logoutUser = () => {
 
    return async function(dispatch){
 
        await logout();
        dispatch({type: LOGIN_USER, payload: {} });
        dispatch({type: CREATE_USER, payload: {} });
  
    }
 

}