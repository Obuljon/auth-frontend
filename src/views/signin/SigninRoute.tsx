import React from "react";
import { BackgroundImgIn, LabelSign, SigninForm } from "../../components";

export default function SigninRoute() {
  return (
    <div className="flex flex-row">
      <div className="mx-28 w-auto my-40 flex flex-col gap-8">
        <LabelSign label={"Sign in"} sign={false} />
        <SigninForm />
      </div>
      <BackgroundImgIn />
    </div>
  );
}
