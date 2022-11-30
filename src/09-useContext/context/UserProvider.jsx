import {useState} from "react";
import { UserContext } from "./UserContext";

// const user = {
//   id:1,
//   name: 'Mario Torres',
//   email: 'mario.torreslepe@gmail.com'
// };

const UserProvider = ({ children }) => {

  const [user, setUser] = useState()

  return (
    //<UserContext.Provider value={{ hola: "Mundo", user }}>
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
