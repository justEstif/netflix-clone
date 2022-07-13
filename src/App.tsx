import { FunctionComponent, Fragment, lazy, Suspense, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageRoutes from "./constants/Page.Routes";
import UserContext from "./context/UserContext"
import useAuthListener from "./hooks/useAuthListener"
interface AppProps { }

const LandingPage = lazy(() => import("./pages/LandingPage/LandingPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage/SignInPage"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"))

const App: FunctionComponent<AppProps> = () => {
  const { user } = useAuthListener();
  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<Fragment></Fragment>}>
          <Routes>
            <Route path={PageRoutes.Landing} element={<LandingPage />} />
            <Route path={PageRoutes.SignUp} element={<SignUpPage />} />
            <Route path={PageRoutes.SignIn} element={<SignInPage />} />
            <Route path={PageRoutes.Home} element={<HomePage />} />
          </Routes>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
