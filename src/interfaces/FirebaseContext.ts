import { FirebaseApp } from "firebase/app";
import { Auth } from "firebase/auth";
import { Firestore } from "firebase/firestore";

export interface IFirebaseContext {
  db: Firestore;
  auth: Auth;
  app: FirebaseApp;
}
