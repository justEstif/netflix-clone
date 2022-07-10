import { Fragment, FunctionComponent } from "react";
import { useLocation } from "react-router-dom";
interface ISignUpPage {
  children?: React.ReactNode;
}
interface ILocation {
  state: {
    useEmail: string;
  };
}

const SignUpPage: FunctionComponent<ISignUpPage> = () => {
  const location = useLocation().state as { userEmail: string };
  const { userEmail } = location;

  return (
    <Fragment>
      {userEmail}
      <p>Hello</p>
    </Fragment>
  );
};

export default SignUpPage;
