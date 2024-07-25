import React from "react";
import { useGoogleLogin } from "react-use-googlelogin";

const GoogleAuthContext = React.createContext();

export const GoogleAuthProvider = ({ children }) => {
  const googleAuth = useGoogleLogin({
    //clientId: process.env.GOOGLE_CLIENT_ID, // Your clientID from Google.
    //GOOGLE_CLIENT_ID
    clientId:
      "500206773423-bm8a8v6405qkd85u71fi6rj838visiha.apps.googleusercontent.com",
    //  "312672942750-87ponj1bg4qbl3cjrf7clipd5dmc6tte.apps.googleusercontent.com", // Your clientID from Google.
    isSignedIn:true,
  });

  return (
    <GoogleAuthContext.Provider value={googleAuth}>
      {children}
    </GoogleAuthContext.Provider>
  );
};

export const useGoogleAuth = () => React.useContext(GoogleAuthContext);
