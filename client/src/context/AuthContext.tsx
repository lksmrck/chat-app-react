import { getLocalStorage } from "../utils/getLocalStorage";
import { UserTypeInLS } from "../types/types";
import { createContext, ReactNode, useState, useEffect, FC, useContext } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../firebase";

interface AuthContextInterface {
  currentUser: any;
  setCurrentUser: any;
}

export const AuthContext = createContext({} as AuthContextInterface);

export const AuthContextProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(() => auth.currentUser);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log(user);
    });

    return () => {
      //Unsubscribe
      unsub();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
