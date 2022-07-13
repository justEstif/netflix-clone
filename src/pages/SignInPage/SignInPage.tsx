import { FunctionComponent, useEffect, useRef, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import PageRoutes from "../../constants/Page.Routes";
interface SignInPageProps { }

interface CustomizedState {
  userEmail: string;
}

const SignInPage: FunctionComponent<SignInPageProps> = () => {
  const [userEmail, setUserEmail] = useState(""); // email state
  const { userEmail: userEmailFromInput } = useLocation()
    .state as CustomizedState;
  const userEmailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);


  useEffect(() => {
    if (userEmailFromInput) {
      setUserEmail(userEmailFromInput);
      // to stop TS error
      if (passwordInputRef.current != null) {
        passwordInputRef.current.focus();
      }
    } else {
      // to stop TS error
      if (userEmailInputRef.current != null) {
        userEmailInputRef.current.focus();
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("")
    const handleSignIn = async () => {
      const { response, message } = await signInUser(userEmail, password);
      if (response) {
        navigate(PageRoutes.Home)
      } else {
        setError(message);
      }
    };
    handleSignIn();
  };
  return (
    <div className="h-full w-full bg-netflix-background bg-cover bg-center">
      <div className="top-0 left-0 fixed w-full h-screen bg-black/40">
        <div className="h-full w-full grid grid-rows-navbar-content text-white container mx-auto p-4">

          <nav className="flex justify-between">
            <button className=" shadow-2xl text-red-700 text-5xl uppercase tracking-wider font-bebas">
              <Link to={PageRoutes.Landing}>Netflix</Link>
            </button>
          </nav>

          <section className="flex items-center justify-center relative ">
            <div className="bg-black/70 absolute top-10 px-16 py-10 w-full max-w-md">

              <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-10 w-full mb-3">


                <h1 className="text-white text-3xl font-semibold tracking-wider">
                  Sign In
                </h1>

                <input
                  value={userEmail}
                  required
                  ref={userEmailInputRef}
                  onChange={({ target }) => setUserEmail(target.value)}
                  type="email"
                  placeholder="Email Address"
                  className="px-5 py-4 rounded bg-gray-400/40 text-gray-200 focus:outline-none focus:border-b-4 border-orange-500 duration-300"
                />

                <input
                  required
                  ref={passwordInputRef}
                  type="password"
                  placeholder="Password"
                  className="px-5 py-4 rounded bg-gray-400/40 text-gray-200 focus:outline-none focus:border-b-4 border-orange-500 duration-300"
                />

                <button
                  type="submit"
                  className="rounded-md text-xl py-2 bg-red-600 w-full text-white hover:bg-red-700">
                  Sign In
                </button>

                <div className="flex justify-between items-center text-gray-400">
                  <div className="flex justify-between items-center gap-2">
                    <input type="checkbox" className="" />
                    <p>Remember Me</p>
                  </div>
                  <p>Need Help?</p>
                </div>

              </form>

              <div className="py-4">
                <p className="text-gray-400">
                  New to Netflix?{" "}
                  <span className="text-white">Sign up now.</span>
                </p>
              </div>

            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
