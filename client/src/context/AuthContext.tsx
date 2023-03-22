import { getLocalStorage } from "../utils/getLocalStorage";
import { UserTypeInLS } from "../types/types";
import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
  FC,
} from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { User } from "firebase/auth";

interface AuthContextInterface {
  /* user: UserTypeInLS | null;
  setUser: Dispatch<SetStateAction<UserTypeInLS | null>>; */
  currentUser: any;
  setCurrentUser: any;
}

const AuthContext = createContext({} as AuthContextInterface);

export const AuthContextProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<any>({});

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user): any => {
      setCurrentUser(user);
      console.log(user);
    });
  });

  /*  const [user, setUser] = useState(getLocalStorage("user") || null);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
 */
  return (
    <AuthContext.Provider
      value={{
        /*  user,
        setUser, */
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
