import { User } from "firebase/auth";

export interface IUser {
  user: { user: User; userDoc: { liked: number[]; docId: string } };
}
