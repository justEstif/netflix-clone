import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import signUpBgImg from "../assets/img-signin.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
      console.log(UserAuth);
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
          setError("Your email address appears to be malformed.");
          break;
        case "auth/wrong-password":
          setError("Your password is wrong.");
          break;
        case "auth/user-not-found":
          setError("User with this email doesn't exist.");
          break;
        case "auth/user-disabled":
          setError("User with this email has been disuserabled.");
          break;
        case "auth/too-many-requests":
          setError("Too many requests. Try again later.");
          break;
        case "auth/operation-not-allowed":
          setError("Signing in with Email and Password is not enabled.");
          break;
        default:
          setError("An undefined Error happened.");
      }
    }
  };
  return (
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
            <h1 className="text-3xl font-bold">Sign In</h1>
            {error && <p>{error}</p>}
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="w-full flex flex-col py-4">
              <input
                className="p-3 my-2 bg-gray-600 rounded"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              <input
                className="p-3 my-2 bg-gray-600 rounded"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
              <button className="bg-red-600 py-3 my-5 w-full rounded font-bold">
                Sign In
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
                New to Netflix?
                <span className="text-white mx-1">
                  <Link to="/signup">Sign Up</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
