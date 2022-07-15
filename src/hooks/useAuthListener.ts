// ! hook that listens to auth change
import { useState, useEffect, useContext } from "react";
import FirebaseContext from "../context/FirebaseContext";
import { User, Auth, onAuthStateChanged } from "firebase/auth";
import { getUserDoc } from "../services/firebase";

const useAuthListener = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser") || "{}")
  );
  const firebase = useContext(FirebaseContext);
  const auth = firebase?.auth as Auth;

  useEffect(() => {
    const listener = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });
    return () => listener();
  }, [auth]);

  useEffect(() => {
    const getUserDocFromDb = async (userEmail: string) => {
      const userDoc = await getUserDoc(userEmail);
      setUser((prevState: User) => {
        return {
          ...prevState,
          userDoc,
        };
      });
    };
    // only called if there is a user
    if (user?.email) getUserDocFromDb(user?.email);
  }, [auth]);

  return { user };
};

export default useAuthListener;
