import { signInWithPopup } from "firebase/auth"; // Import necessary function
import { auth, provider } from "../firebase"; // Import auth and provider from your Firebase config

export function signInApi() {
  return (dispatch) => {
    signInWithPopup(auth, provider) // Call signInWithPopup with the new modular API
      .then((payload) => {
        console.log(payload);
        // You can also dispatch the payload to the redux store if needed
      })
      .catch((error) => {
        alert(error.message);
      });
  };
}
