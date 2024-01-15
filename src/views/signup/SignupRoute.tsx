import React from "react";
import { Link } from "react-router-dom";
import { BackgroundImgUp, LabelSign, SignuoForm } from "../../components";
export default function SignupRoute() {
  return (
    <div className="flex">
      <BackgroundImgUp />
      <div className="w-1/2 flex flex-col justify-center items-end mx-32 my-28 gap-y-12">
        <LabelSign label={"Register your account"} sign={true} />
        <SignuoForm />
        <p className="leading-normal">
          Hey!! This design is absolutly free for you.
        </p>
      </div>
    </div>
  );
}
