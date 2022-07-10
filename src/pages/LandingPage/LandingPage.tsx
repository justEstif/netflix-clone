import { useState, FunctionComponent } from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import PageRoutes from "../../constants/Page.Routes";

interface LandingPageProps {}

const LandingPage: FunctionComponent<LandingPageProps> = () => {
  const [userEmail, setUserEmail] = useState("");
  return (
    <div className="h-full w-full bg-netflix-background bg-cover bg-center">
      <div className="top-0 left-0 fixed w-full h-screen bg-black/40">
        <div className="h-full w-full grid grid-rows-navbar-content text-white container mx-auto p-4">
          <nav className="flex justify-between">
            <button className=" shadow-2xl text-red-700 text-5xl uppercase tracking-wider font-bebas">
              <Link to={PageRoutes.Landing}>Netflix</Link>
            </button>
            <div className="flex items-center gap-5 text-xl">
              <button className="py-3 px-7 rounded-md hover:text-red-500">
                <Link to={PageRoutes.SignIn}>Sign in</Link>
              </button>
              <button className="bg-red-700 py-3 px-7 rounded-md hover:bg-red-800">
                <Link to={PageRoutes.SignUp}>Sign up</Link>
              </button>
            </div>
          </nav>
          <section className="flex items-center justify-center">
            <div className="flex flex-col gap-5 max-w-2xl text-center">
              <div className="text-6xl font-extrabold">
                Unlimited movies, TV shows, and more.
              </div>
              <div className="text-3xl">Watch anywhere. Cancel anytime.</div>
              <div className="text-xl">
                Ready to watch? Enter your email to create or restart your
                membership.
              </div>
              <div className="flex justify-center items-center">
                <input
                  placeholder="Email address"
                  type="text"
                  className="py-7 text-black w-96 px-3 focus:outline-none"
                  value={userEmail}
                  onChange={({ target }) => setUserEmail(target.value)}
                />
                <button className="text-xl rounded-md bg-red-700 px-10 py-7">
                  <Link
                    to={PageRoutes.SignUp}
                    state={userEmail}
                    className="flex items-center justify-center ">
                    Get Started <FaAngleRight />
                  </Link>
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
