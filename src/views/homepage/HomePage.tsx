import React, { useState, useEffect } from "react";
import { Link, redirect } from "react-router-dom";

export default function HomePage() {
  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="flex flex-col justify-center items-center text-center h-full">
      <h1 className="text-6xl font-bold text-blue-900">welcome to</h1>
      <button
        className="text-2xl rounded-full font-bold bg-indigo-800 w-64 h-16 text-white"
        type="button"
        onClick={logout}
      >
        Log out
      </button>
    </div>
  );
}
