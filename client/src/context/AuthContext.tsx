import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  FC,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../setups/firebase";

interface AuthContextInterface {
  currentUser: /* User | null; */ any;
  setCurrentUser: /* Dispatch<SetStateAction<User | null>>; */ any;
  isLoading: boolean;
}

export const AuthContext = createContext({} as AuthContextInterface);

export const AuthContextProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(() => auth.currentUser);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsLoading(false);
    });

    return () => {
      //Unsubscribe
      unsub();
      setIsLoading(false);
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        isLoading,
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
