import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import signUpBgImg from "../assets/img-signin.jpg";
import { UserAuth } from "../context/AuthContext";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Fragment>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src={signUpBgImg}
          alt="signup page background"
        />
        <div className="top-0 left-0 fixed w-full h-screen bg-black/60"></div>
        <div className="fixed w-full px-6 py-24 z-10">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <form
                className="w-full flex flex-col py-4 "
                onSubmit={(e) => handleSubmit(e)}>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 my-2 bg-gray-600 rounded"
                  type="email"
                  placeholder="Email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2 bg-gray-600 rounded"
                  type="password"
                  placeholder="Password"
                />
                <button className="bg-red-600 py-3 my-5 w-full rounded font-bold">
                  Sign Up
                </button>
                <div className="flex justify-between items-center text-md text-gray-500">
                  <p className="flex items-center gap-2">
                    <input
                      className="text-black focus:bg-white focus:ring-0 bg-gray-500"
                      type="checkbox"
                    />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <div className="text-gray-500 mt-6">
                  Already subscribed to Netflix?
                  <span className="text-white mx-1">
                    <Link to="/login">Sign In</Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Signup;
