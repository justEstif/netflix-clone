import { createContext } from "react";
import { IFirebaseContextInterface } from "../helpers/Interfaces";

const FirebaseContext = createContext<IFirebaseContextInterface | null>(null);

export default FirebaseContext;
