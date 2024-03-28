import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "D:/Code/Web Development/project/Full stack/Firact/client/src/firebase.js";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setcurrentUser] = useState({});
  useEffect(() => {
   const unsub= onAuthStateChanged(auth, (user) => {
       setcurrentUser(user);
       console.log(user)
   });
      return () => {
          unsub();
      }
  },[]);
    return(
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    )
    
};
