import { firebase } from "../lib/firebase.config";
import { collection, query, getDocs, where } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { AuthError } from "firebase/auth";

const { db, auth } = firebase;

export const userEmailExistsInDB = async (
  userEmail: string
): Promise<boolean> => {
  const usersRef = collection(db, "users");
  const q = query(usersRef, where("userEmail", "==", userEmail.toLowerCase()));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.length > 0;
};

export const signInUser = async (userEmail: string, password: string) => {
  try {
    const { user } = await signInWithEmailAndPassword(
      auth,
      userEmail,
      password
    );
    return {
      response: true,
      message: user?.uid,
    };
  } catch (err) {
    const typedError = err as AuthError;
    return {
      response: false,
      message: typedError.code,
    };
  }
};

// TODO function to getUserDataByUserId -> from the DB
  // get the docId
export const signUpUser = async (userEmail: string, password: string) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      userEmail,
      password
    );

    return {
      response: true,
      message: user?.uid,
    }
  } catch (err) {
    const typedError = err as AuthError;
    return {
      response: false,
      message: typedError.code,
    };
  }
}

