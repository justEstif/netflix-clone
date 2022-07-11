import { Auth } from "firebase/auth";
import { Firestore } from "firebase/firestore";

interface IFirebaseContextInterface {
  db: Firestore;
  auth: Auth;
}

interface IFirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

export type { IFirebaseContextInterface, IFirebaseConfig };
