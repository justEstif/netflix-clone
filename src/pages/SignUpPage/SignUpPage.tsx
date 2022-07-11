import { Fragment, FunctionComponent } from "react";
import { useLocation } from "react-router-dom";
interface ISignUpPage {
  children?: React.ReactNode;
}
interface CustomizedState {
  userEmail: string;
}

const SignUpPage: FunctionComponent<ISignUpPage> = () => {
  const location = useLocation();
  const { userEmail } = location.state as CustomizedState;
  return (
    <Fragment>
      {userEmail}
      <p>Hello</p>
    </Fragment>
  );
};

export default SignUpPage;
