import { useEffect, useState } from "react";
import {Message} from "./Message";

export const SimpleForm = () => {
  const [fromState, setFormState] = useState({
    username: "user",
    email: "mario@google.cl",
  });

  const { username, email } = fromState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormState({
      ...fromState,
      [name]: value,
    });
  };
  
  useEffect(() =>{
    // console.log('use efect')
  },[])

  useEffect(() =>{
    // console.log('form state changed!')
  },[fromState])

  useEffect(() =>{
    // console.log('email changed!')
  },[email])

  return (
    <>
      <div className="container">
        <h1 className="mt-5">SimpleForm</h1>
        <hr />
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          name="username"
          value={username}
          onChange={onInputChange}
        />
        <input
          type="email"
          className="form-control mt-4"
          placeholder="example@gmail.com"
          name="email"
          value={email}
          onChange={onInputChange}
        />
      </div>
      {
        (username === 'user') && <Message/>
      }
    </>
  );
};
