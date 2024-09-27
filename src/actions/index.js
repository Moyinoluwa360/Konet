import { signInWithPopup } from "firebase/auth";
import { auth, provider, storage, db } from "../firebase"; // Make sure you're importing `db` (Firestore) and `storage` correctly
import { SET_USER } from "./actionType";
// Import Firebase Storage functions
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";


// Action to set the user
export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});

// Sign-in function using Firebase Auth
export function signInApi() {
  return (dispatch) => {
    signInWithPopup(auth, provider) // Call signInWithPopup with the modular API
      .then((payload) => {
        dispatch(setUser(payload.user));
      })
      .catch((error) => {
        alert(error.message);
      });
  };
}

// Function to monitor user authentication state
export function getUserAuth() {
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  };
}

// Sign-out function
export function signOutApi() {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
}

// Post article function with image upload and Firestore integration
export function postArticleAPI(payload) {
  return (dispatch) => {
    const db = getFirestore(); // Initialize Firestore instance

    if (payload.image !== "") {
      const storage = getStorage(); // Initialize Firebase storage
      // Use Firebase Storage's new method to create a reference
      const storageRef = ref(storage, `images/${payload.image.name}`); // Create a reference for the image

      // Upload the image using uploadBytesResumable
      const uploadTask = uploadBytesResumable(storageRef, payload.image);
      
      // Monitor the upload state
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Progress: ${progress}%`); // Correct the backticks for template literals

          if (snapshot.state === "RUNNING") {
            console.log(`Upload is running. Progress: ${progress}%`);
          }
        },
        (error) => console.log(error.code),
        async () => {
          // Get the download URL after the upload is complete
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          console.log("File available at", downloadURL);

          // Add the article to Firestore with the download URL using Firebase v9+ API
          await addDoc(collection(db, "articles"), {
            actor: {
              description: payload.user.email,
              title: payload.user.displayName,
              date: payload.timestamp,
              image: payload.user.photoURL,
            },
            video: payload.video || "",
            sharedImg: downloadURL,
            comments: 0,
            description: payload.description,
          });
        }
      );
    } else {
      // In case no image is uploaded, add the article without an image using Firebase v9+ API
      addDoc(collection(db, "articles"), {
        actor: {
          description: payload.user.email,
          title: payload.user.displayName,
          date: payload.timestamp,
          image: payload.user.photoURL,
        },
        video: payload.video || "",
        sharedImg: "",
        comments: 0,
        description: payload.description,
      });
    }
  };
}
