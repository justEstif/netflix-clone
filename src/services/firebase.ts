import { db } from "../lib/firebase.config";
import { collection, query, getDocs, where } from "firebase/firestore";

export const userEmailExistsInDB = async (
  userEmail: string
): Promise<boolean> => {
  const usersRef = collection(db, "users");
  const q = query(usersRef, where("userEmail", "==", userEmail.toLowerCase()));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.length > 0;
};
