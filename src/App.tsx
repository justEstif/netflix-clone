import { FunctionComponent, Fragment, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageRoutes from "./constants/Page.Routes";

interface AppProps {}

const LandingPage = lazy(() => import("./pages/LandingPage/LandingPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage/SignInPage"));

const App: FunctionComponent<AppProps> = () => {
  return (
    <Router>
      <Suspense fallback={<Fragment></Fragment>}>
        <Routes>
          <Route path={PageRoutes.Landing} element={<LandingPage />} />
          <Route path={PageRoutes.SignUp} element={<SignUpPage />} />
          <Route path={PageRoutes.SignIn} element={<SignInPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
