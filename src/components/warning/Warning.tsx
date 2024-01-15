import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts";

export default function Warning() {
  const { wardrop, close, messages } = useContext(AuthContext);
  const wartext = messages.map((item, index) => (
    <p className="font-normal text-2xl text-red-500 text-center" key={index}>
      {item}
    </p>
  ));
  const mainclass = "fixed top-[30%] left-[35%] z-20 bg-white ";
  const hiddin = "invisible";
  return (
    <div
      className={`${mainclass} ${
        wardrop ? hiddin : ""
      } flex flex-col items-center w-[920px] h-auto rounded-lg border-4 `}
    >
      <div className="m-15 flex flex-col justify-center items-center">
        <h1 className="font-bold text-4xl my-8 text-center text-red-700">
          Warning
        </h1>
        <div>{wartext}</div>
        <button
          type="button"
          className="bg-red-500 text-white w-56 h-16 text-4xl rounded-lg my-6"
          onClick={close}
        >
          to close
        </button>
      </div>
    </div>
  );
}
