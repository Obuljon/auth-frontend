import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ButtonSubmit from "../buttonSubmit/ButtonSubmit";
import { AuthContext } from "../../contexts";
export default function SignuoForm() {
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const { signup, newvalue } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    // if (data.name && data.email && data.password)
    signup(data);
  };
  const handleChange = (e) => {
    const { email, name, password } = data;
    const newdata = { email, name, password };
    newdata[e.target.name] = e.target.value;
    setData(newdata);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center ">
        <label className="flex flex-col my-5">
          <span className="text-3xl font-normal text-right px-10 mb-3">
            Email
          </span>
          <input
            type="email"
            name="email"
            className="rounded-lg w-[600px] h-24 text-3xl font-normal text-right bg-neutral-100 px-8 outline-none hover:outline-none"
            placeholder="Please enter your email"
            onChange={handleChange}
            value={newvalue ? "" : data.email}
          />
        </label>
        <label className="flex flex-col my-5">
          <span className="text-3xl font-normal text-right px-10 mb-3">
            Username
          </span>
          <input
            className="rounded-lg w-[600px] h-24 text-3xl font-normal text-right bg-neutral-100 px-8 outline-none hover:outline-none"
            type="text"
            placeholder="Username"
            name="name"
            value={newvalue ? "" : data.name}
            onChange={handleChange}
          />
        </label>

        <label className="flex flex-col my-5">
          <span className="text-3xl font-normal text-right px-10 mb-3">
            password
          </span>
          <input
            type="password"
            className="rounded-lg w-[600px] h-24 text-3xl font-normal text-right bg-neutral-100 px-8 outline-none hover:outline-none"
            placeholder="Password"
            name="password"
            value={newvalue ? "" : data.password}
            onChange={handleChange}
          />
        </label>
        <div className="flex flex-row items-center gap-8 my-5">
          <Link
            to="/signin"
            className="flex-grow text-end text-2xl font-normal leading-normal text-indigo-600"
          >
            Already Registered?
          </Link>
          <ButtonSubmit />
        </div>
      </form>
    </>
  );
}
