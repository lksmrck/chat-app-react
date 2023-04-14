import { useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { auth } from "../setups/firebase";
import { useNavigate } from "react-router-dom";
import { LINKS } from "../constants";
import { createUser } from "../api";

const useUserAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const googleSignIn = async () => {
    setIsLoading(true);
    const provider = new GoogleAuthProvider();
    //Google doporučuje signInWithPopup na větších obrazovkách a signInWithRedirect na menších
    setPersistence(auth, browserSessionPersistence);
    await signInWithPopup(auth, provider).then(async (result) => {
      const { email, uid, displayName, photoURL } = result.user;

      await createUser({ email, uid, displayName, photoURL });

      setIsLoading(false);
      navigate(LINKS.chat);
    });
  };

  const googleSignOut = async () => signOut(auth).then(() => navigate(LINKS.login));

  return { googleSignIn, googleSignOut, isLoading };
};
export default useUserAuth;
