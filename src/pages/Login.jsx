import React, { useState } from "react";
import { assets } from "../assets/assets";

const Login = () => {
  const [state, setState] = useState("Admin");
  return (
    <form className="min-h-[80vh] flex items-center">
      <div className="flex flex-col m-auto  gap-3 p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] shadow-lg">
        <p className="text-2xl font-semibold">
          <span className="text-primary">{state}</span> Login
        </p>

        <div className="w-full">
          <p>Email</p>
          <input
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            type="email"
            required
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            type="password"
            required
          />
        </div>
        <button className="w-full py-2 text-base text-white rounded-md bg-primary ">
          Login
        </button>

        {state === "Admin" ? (
          <p>
            Doctor Login ?
            <span
              onClick={() => setState("Doctor")}
              className="cursor-pointer text-primary "
            >
              Click here
            </span>{" "}
          </p>
        ) : (
          <p>
            {" "}
            Admin Login ?{" "}
            <span
              onClick={() => setState("Admin")}
              className="cursor-pointer text-primary "
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
