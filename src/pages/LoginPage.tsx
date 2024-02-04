import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  logInWithEmailAndPassword,
  signInWithGoogle,
  logout,
} from 'shell/firebase';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="">
      <div className="">
        <input
          type="text"
          className=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className=""
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className=""
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        <button className="" onClick={() => logout()}>
          Logout
        </button>
        <button className="" onClick={signInWithGoogle}>
          Login with Google
        </button>
        <div>
          <Link to="/reset">Forgot Password</Link>
        </div>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Login;
