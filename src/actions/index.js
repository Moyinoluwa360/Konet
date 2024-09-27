import { signInWithPopup } from "firebase/auth"; // Import necessary function
import { auth, provider, storage } from "../firebase"; // Import auth and provider from your Firebase config
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


export function signOutApi() {
  return (dispatch) => {
    auth.signOut().then(()=>{
      dispatch(setUser(null))
    }).catch((error)=>{
      console.log(error.message)
    })
  };
}

export function postAricleAPI(payload) {
  return (dispatch) => {
    if (payload.image != ""){
      const upload = storage.ref(`images/${payload.image.name}`)
      .put(payload.image);
      upload.on("state_changed", (snapshot)=>{
        const progress = ((
          snapshot.bytesTransferred / snapshot.totalBytes
        ) * 100)
        console.log(`Progress: $(progress)%`)
      })
    }
  };
}