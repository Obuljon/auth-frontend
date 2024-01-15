import React, { createContext, useState } from "react";

import { signinFetch, signupFetch } from "../../sevices";

export const AuthContext = createContext();

export default function AuthComContext(props) {
  const [newvalue, setNewvalue] = useState(false); //jarayon mofaqqatli o'tsa input value yangilanadi
  const [wardrop, setWardrop] = useState(true); //jarayonda hatolik bo'lsa wardrop chiqadi
  const [successdrop, setSuccessdrop] = useState(true); // jarayon movaqqati bo'lsa success darop chiqadi
  const [messages, setMessage] = useState([]);
  const signup = async (obj) => {
    const [isTrue, msg] = await signupFetch(obj);

    if (isTrue) {
      setNewvalue(true);
      setSuccessdrop(false);
    } else {
      setMessage(msg);
      setWardrop(isTrue);
    }
  };
  const signin = async (obj) => {
    const [isTrue, msg] = await signinFetch(obj);
    if (isTrue) {
      setNewvalue(true);
      setSuccessdrop(false);
      localStorage.setItem("access_token", msg["access_token"]);
    } else {
      setMessage(msg);
      setWardrop(isTrue);
    }
  };
  const close = () => {
    setWardrop(true);
    setSuccessdrop(true);
  };

  return (
    <AuthContext.Provider
      value={{
        signup,
        signin,
        wardrop,
        close,
        messages,
        successdrop,
        newvalue,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
