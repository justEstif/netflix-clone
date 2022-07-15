import React, { FunctionComponent, Fragment, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageRoutes from "./constants/Page.Routes";
import UserContext from "./context/UserContext";
import useAuthListener from "./hooks/useAuthListener";

const LandingPage = lazy(() => import("./pages/LandingPage/LandingPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage/SignInPage"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const AccountPage = lazy(() => import("./pages/AccountPage/AccountPage"));

const App: FunctionComponent = () => {
  const { user } = useAuthListener();
  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<Fragment></Fragment>}>
          <Routes>
            {/**
             * // TODO: create protected routes around the HomePage and AccountPage
             * // TODO: create a redirect to HomePage is user is logged in from the sign in, sign up and landing page
             **/}
            <Route path={PageRoutes.Landing} element={<LandingPage />} />
            <Route path={PageRoutes.SignUp} element={<SignUpPage />} />
            <Route path={PageRoutes.SignIn} element={<SignInPage />} />
            <Route path={PageRoutes.Home} element={<HomePage />} />
            <Route path={PageRoutes.Account} element={<AccountPage />} />
          </Routes>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
