import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWZQHVtzzrF7Lj4lI83jV8eHd9Mx75veA",
  authDomain: "crwn-clothing-db-fa3c3.firebaseapp.com",
  projectId: "crwn-clothing-db-fa3c3",
  storageBucket: "crwn-clothing-db-fa3c3.appspot.com",
  messagingSenderId: "7959948923",
  appId: "1:7959948923:web:a46340e7e02ce6b14f7cde",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  //user NOT in database
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user in database", error.message);
    }
  }
  return userDocRef;
};
