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
    <div className="fixed top-0 left-0 w-full h-full bg-center bg-cover bg-netflix-background">
      <div className="container grid p-4 mx-auto w-full h-full text-white grid-rows-navbar-content">
        <LandingNavBar />
        <section className="flex relative justify-center items-center">
          <div className="flex absolute top-20 flex-col text-center">
            <div className="flex flex-col gap-10 mb-10 max-w-2xl">
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
              className="flex justify-center items-center"
            >
              <input
                placeholder="Email address"
                type="email"
                required
                className="flex-grow py-10 px-3 text-xl text-black duration-500 focus:outline-none"
                value={userEmail}
                onChange={({ target }) => setUserEmail(target.value)}
              />

              <button type="submit" className="flex p-10 text-xl bg-red-700">
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
