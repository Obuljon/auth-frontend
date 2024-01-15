import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts";

export default function Successfull() {
  const { successdrop, close } = useContext(AuthContext);
  const mainclass = "fixed top-[30%] left-[35%] z-20 bg-white ";
  const hiddin = "invisible";
  const next = () => {
    close();
    if (window.location.pathname == "/signup") window.location.href = "/signin";
    else window.location.href = "/";
  };
  return (
    <div
      className={`${mainclass} ${
        successdrop ? hiddin : ""
      } flex flex-col items-center w-[920px] h-auto rounded-lg border-4 `}
    >
      <div className="m-15 flex flex-col justify-center items-center">
        <h1 className="font-bold text-4xl my-8 text-cente text-green-700">
          Successfull
        </h1>
        <button
          type="button"
          className="text-white bg-sky-900 w-56 h-16 text-4xl rounded-lg my-6"
          onClick={next}
        >
          next
        </button>
      </div>
    </div>
  );
}
