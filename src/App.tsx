import React from "react";
import { createRoot } from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  redirect,
} from "react-router-dom";

import "./App.scss";
import { SigninRoute, SignupRoute, HomePage, Notfound } from "./views";
import { Backdrop, Successfull, Warning } from "./components";
import { AuthComContext } from "./contexts";
import { getUserToken } from "./sevices";
export default function App() {
  const router = createBrowserRouter([
    {
      index: true,
      errorElement: <Notfound />,
      loader: async () => {
        const isMatch = await getUserToken();
        if (!isMatch) throw redirect("/signin");
        return <HomePage />;
      },
      element: <HomePage />,
    },
    {
      path: "/signup",
      element: <SignupRoute />,
      loader: async () => {
        const isMatch = await getUserToken();
        if (isMatch) return redirect("/");
        return <SignupRoute />;
      },
    },
    {
      path: "/signin",
      element: <SigninRoute />,
      loader: async () => {
        const isMatch = await getUserToken();
        if (isMatch) return redirect("/");
        return <SignupRoute />;
      },
    },
  ]);
  return (
    <>
      <AuthComContext>
        <Warning />
        <Successfull />
        <Backdrop />

        <div className="mx-auto container bg-white w-[1920px] h-[1080px] my-10 main-backdrop">
          <RouterProvider router={router} />
        </div>
      </AuthComContext>
    </>
  );
}
