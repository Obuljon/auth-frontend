import React, { useState, useContext } from "react";
import { ButtonSubmit } from "../";
import { AuthContext } from "../../contexts";

export default function SigninForm() {
  const [data, setData] = useState({ email: "", password: "" });
  const { signin, newvalue } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    // if (data.email && data.password)
    signin(data);
  };

  const handleChange = (e) => {
    const { email, password } = data;
    const newdata = { email, password };
    newdata[e.target.name] = e.target.value;
    setData(newdata);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center ">
        <label className="flex flex-col my-5">
          <span className="text-3xl font-normal  px-10 mb-3">Email</span>
          <input
            type="email"
            className="rounded-lg w-[600px] h-24 text-3xl font-normal  bg-neutral-100 px-8 outline-none hover:outline-none"
            placeholder="Please enter your email"
            name="email"
            value={newvalue ? "" : data.email}
            onChange={handleChange}
          />
        </label>

        <label className="flex flex-col my-5">
          <span className="text-3xl font-normal  px-10 mb-3">password</span>
          <input
            type="password"
            className="rounded-lg w-[600px] h-24 text-3xl font-normal  bg-neutral-100 px-8 outline-none hover:outline-none"
            placeholder="Please enter your password"
            name="password"
            value={newvalue ? "" : data.password}
            onChange={handleChange}
          />
        </label>
        <div className="flex flex-row items-center gap-8 my-5">
          <ButtonSubmit />
        </div>
      </form>
    </>
  );
}
