import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut } from "firebase/auth";
import { auth } from "../setups/firebase";
import { useNavigate } from "react-router-dom";
import { routes } from "../constants";
import { createUser } from "../api";

const useUserAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const googleSignIn = async () => {
    setIsLoading(true);
    const provider = new GoogleAuthProvider();
    //Google doporučuje signInWithPopup na větších obrazovkách a signInWithRedirect na menších
    await signInWithPopup(auth, provider).then(async (result) => {
      const { email, uid, displayName, photoURL } = result.user;

      await createUser({ email, uid, displayName, photoURL });

      setIsLoading(false);
      navigate(routes.chat);
    });
  };

  const googleSignOut = async () => signOut(auth).then(() => navigate(routes.login));

  return { googleSignIn, googleSignOut, isLoading };
};
export default useUserAuth;
