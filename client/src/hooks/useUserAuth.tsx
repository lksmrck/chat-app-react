import { useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { routes } from "../constants";
import { createUser } from "../api";

const useUserAuth = () => {
  const [isLoading, setIsLoading] = useState();
  const navigate = useNavigate();

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    //Google doporučuje signInWithPopup na větších obrazovkách a signInWithRedirect na menších
    await signInWithPopup(auth, provider).then((result) => {
      /*   const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken; */
      const { email, uid, displayName } = result.user;
      createUser({ email, uid, displayName });
      navigate(routes.chat);
    });

    //TODO: Vytvořit usera a k němu chat kolekci
  };

  const googleSignOut = async () => {
    signOut(auth).then(() => navigate(routes.login));
  };

  return { googleSignIn, googleSignOut };
};
export default useUserAuth;
