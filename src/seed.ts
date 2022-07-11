import { addDoc, collection } from "firebase/firestore";
import { Firestore } from "firebase/firestore";

const seedDatabase = (db: Firestore): void => {
  const users = [
    {
      userId: "1",
      username: "steve",
      userEmail: "steve@test.com",
      liked: [],
      watched: [],
    },
    {
      userId: "2",
      username: "steven",
      userEmail: "steven@test.com",
      liked: [],
      watched: [],
    },
  ];

  const addUsers = async () => {
    for (let k = 0; k < users.length; k++) {
      await addDoc(collection(db, "users"), users[k]);
    }
  };

  addUsers();
};

export default seedDatabase;
