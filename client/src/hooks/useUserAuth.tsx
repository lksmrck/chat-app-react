import { useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

const useUserAuth = () => {
  const [isLoading, setIsLoading] = useState();

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    //Google doporučuje signInWithPopup na větších obrazovkách a signInWithRedirect na menších
    await signInWithPopup(auth, provider).then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;

      console.log(token);
      console.log(user);
    });

    //TODO: Vytvořit usera a k němu chat kolekci
  };

  const googleSignOut = () => {
    signOut(auth);
  };

  return { googleSignIn, googleSignOut };
};
export default useUserAuth;
