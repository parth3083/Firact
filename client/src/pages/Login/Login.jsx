import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom' 
import './Login.scss'
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';
function Login() {
  const [error, seterror] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;


    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      seterror(true);
      console.log(error);
    }
  };
  return (
    <div className='FormContainer'>
    <div className="FormWrapper">
        <span className='logo'>Firact</span>
        <span className='title'>Login</span>
        <form action="" onSubmit={handleSubmit}>
            <input type="email" placeholder='email' />
            <input type="password" placeholder='password' />
          <button>Sign In</button>
          {error && <h2>Something went wrong</h2>}
        </form>
        <p>Don't  have an account ? <Link to={'/register'}>Register</Link></p>
    </div>
</div>
  )
}

export default Login