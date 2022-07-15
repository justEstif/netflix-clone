import { firebase } from "../lib/firebase.config";
import {
  collection,
  query,
  getDocs,
  where,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
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
    };
  } catch (err) {
    const typedError = err as AuthError;
    return {
      response: false,
      message: typedError.code,
    };
  }
};

export const getUserDoc = async (userEmail: string) => {
  const usersRef = collection(db, "users");
  const q = query(usersRef, where("userEmail", "==", userEmail));
  const querySnapshot = await getDocs(q);
  const userDocArr = querySnapshot.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));
  return userDocArr[0];
};

export const handleMovieLike = async (
  userDocId: string,
  movieId: number | undefined,
  isLiked: boolean
) => {
  const userDoc = doc(db, "users", userDocId);
  return updateDoc(userDoc, {
    liked: isLiked ? arrayRemove(movieId) : arrayUnion(movieId),
  });
};
