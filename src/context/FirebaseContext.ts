import { createContext } from "react";
import { IFirebaseContextInterface } from "../interfaces/FirebaseInterfaces";

const FirebaseContext = createContext<IFirebaseContextInterface | null>(null);

export default FirebaseContext;
