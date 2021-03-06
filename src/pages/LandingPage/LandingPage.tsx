import React, { useState, FunctionComponent } from "react";
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import PageRoutes from "../../constants/Page.Routes";
import { userEmailExistsInDB } from "../../services/firebase";
import LandingNavBar from "../../components/LandingNavBar";

// ! if not navigate to the sign up page
const LandingPage: FunctionComponent = () => {
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const checkUserEmail = async () => {
      const userEmailExists = await userEmailExistsInDB(userEmail);
      if (userEmailExists) {
        navigate(PageRoutes.SignIn, { state: { userEmail } });
      } else {
        navigate(PageRoutes.SignUp, { state: { userEmail } });
      }
    };
    checkUserEmail();
  };

  return (
    <div className="top-0 left-0 fixed w-full h-full bg-netflix-background bg-cover bg-center">
      <div className="h-full w-full grid grid-rows-navbar-content text-white container mx-auto p-4  ">
        <LandingNavBar />
        <section className="flex items-center justify-center relative">
          <div className="text-center flex flex-col absolute top-20">
            <div className="flex flex-col max-w-2xl gap-10 mb-10">
              <p className="text-6xl font-extrabold">
                Unlimited movies, TV shows, and more.
              </p>

              <p className="text-4xl">Watch anywhere. Cancel anytime.</p>
              <p className="text-3xl">
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
            </div>

            <form
              onSubmit={(e) => handleSubmit(e)}
              className="flex justify-center items-center">
              <input
                placeholder="Email address"
                type="email"
                required
                className="py-10 text-black flex-grow px-3 focus:outline-none duration-500 text-xl"
                value={userEmail}
                onChange={({ target }) => setUserEmail(target.value)}
              />

              <button type="submit" className="text-xl bg-red-700 p-10 flex">
                <p>Get Started</p> <FaAngleRight />
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
