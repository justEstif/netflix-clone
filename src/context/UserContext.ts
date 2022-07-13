import { createContext } from "react"
import { User } from "firebase/auth"

interface IUserContext {
  user: User
}
const UserContext = createContext<null | IUserContext>(null)

export default UserContext
