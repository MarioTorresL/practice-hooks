import { useContext } from "react";
import {UserContext} from "./context/UserContext";

const LoginPage = () => {
  const { user, setUser } = useContext( UserContext );

  return (
    <>
      <h1>Login Page</h1>
      <hr />

      <pre>
        {JSON.stringify(user, null, 3)}
      </pre>

      <button className="btn btn-outline-warning" onClick={()=> setUser({id:1, name:'Mario Cristian', email:'mario.torreslepe@gmail.com'})}>Establecer Usuario</button>
    </>
  );
};

export default LoginPage;
