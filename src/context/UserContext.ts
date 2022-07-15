import { createContext } from "react";
import { IUser } from "../interfaces/IUser";

const UserContext = createContext<null | IUser>(null);

export default UserContext;
