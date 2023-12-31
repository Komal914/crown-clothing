import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

// actual val we want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

//allows children to access use state vals
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
