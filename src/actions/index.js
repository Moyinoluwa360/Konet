import { signInWithPopup } from "firebase/auth"; // Import necessary function
import { auth, provider } from "../firebase"; // Import auth and provider from your Firebase config
import { SET_USER } from "./actionType";


export const setUser = (payload)=> ({
  type: SET_USER,
  user: payload,
})

export function signInApi() {
  return (dispatch) => {
    signInWithPopup(auth, provider) // Call signInWithPopup with the new modular API
      .then((payload) => {
        dispatch(setUser(payload.user))
      })
      .catch((error) => {
        alert(error.message);
      });
  };
}

export function getUserAuth(){
  return (dispatch) => {
    auth.onAuthStateChanged(async (user)=>{
      if(user){
        dispatch(setUser(user))
      }
    })
  }
}
