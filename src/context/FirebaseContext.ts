import { createContext } from "react";
import { IFirebaseContext } from "../interfaces/FirebaseContext"

const FirebaseContext = createContext<IFirebaseContext | null>(null);

export default FirebaseContext;
