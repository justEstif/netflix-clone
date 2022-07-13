import { FunctionComponent, useEffect, useRef, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import PageRoutes from "../../constants/Page.Routes";
import { signUpUser } from "../../services/firebase";
interface ISignUpPage {
  children?: React.ReactNode;
}
interface CustomizedState {
  userEmail: string;
}

const SignUpPage: FunctionComponent<ISignUpPage> = () => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { userEmail: userEmailFromInput } = useLocation()
    .state as CustomizedState;
  const navigate = useNavigate()

  const userEmailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // focus on input based on passed prop
    if (userEmailFromInput) {
      setUserEmail(userEmailFromInput);
      if (passwordInputRef.current != null) {
        passwordInputRef.current.focus();
      }
    } else {
      if (userEmailInputRef.current != null) {
        userEmailInputRef.current.focus();
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("")
    const handleSignUp = async () => {
      const { response, message } = await signUpUser(userEmail, password)
      if (response) {
        navigate(PageRoutes.Home)
      } else {
        setError(message);
      }
    }
    handleSignUp()
  }

  return (
    <div className="h-full w-full bg-netflix-background bg-cover bg-center">
      <div className="top-0 left-0 fixed w-full h-screen bg-black/40">
        <div className="h-full w-full grid grid-rows-navbar-content text-white container mx-auto p-4">
          <nav className="flex justify-between">
            <button className=" text-red-700 text-6xl uppercase tracking-wider font-bebas">
              <Link to={PageRoutes.Landing}>Netflix</Link>
            </button>
          </nav>

          <section className="flex items-center justify-center relative ">
            <div className="bg-black/70 absolute top-10 px-16 py-10 w-full max-w-md">
              <form
                onSubmit={(e) => handleSubmit(e)}
                className="flex flex-col gap-10 w-full mb-3">
                <h1 className="text-white text-3xl font-semibold tracking-wider">
                  Sign Up
                </h1>
                {error && <p>{error}</p>}
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
                  value={password}
                  onChange={({ target }) => setPassword(target.value)}
                  type="password"
                  placeholder="Password"
                  className="px-5 py-4 rounded bg-gray-400/40 text-gray-200 focus:outline-none focus:border-b-4 border-orange-500 duration-300"
                />
                <button
                  type="submit"
                  className="rounded-md text-xl py-2 bg-red-600 w-full text-white hover:bg-red-700">
                  Sign Up
                </button>
              </form>

              <div className="py-4">
                <p className="text-gray-400">
                  Already have an account?{" "}
                  <span className="text-white">
                    <Link to={PageRoutes.SignIn} state={{ userEmail: null }}>
                      Sign in
                    </Link>
                  </span>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;



