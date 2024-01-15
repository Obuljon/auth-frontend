import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts";

export default function Backdrop() {
  const { wardrop, successdrop } = useContext(AuthContext);
  const mainclass =
    "fixed top-0 left-0, w-[100%] h-[100%] z-10 bg-slate-400 opacity-60 blur scale-100";
  const hiddin = "invisible opacity-0";

  return (
    <div
      className={`${mainclass} ${wardrop && successdrop ? hiddin : ""} `}
    ></div>
  );
}
// invisible
