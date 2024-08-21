import React, { useState } from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect } from 'firebase/auth';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
    function google() 
  {
    const provider=new GoogleAuthProvider();
    signInWithRedirect(auth,provider).then(async(result)=>{
      console.log(result);
      
    })
  }
  

  return (
    <div>
      {/* <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button> */}
        <button onClick={google}>thee button</button>
      {/* </form> */}
    </div>
  );
};

export default Login;
