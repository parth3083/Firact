import React from 'react'
import './Login.scss'
function Login() {
  return (
    <div className='FormContainer'>
    <div className="FormWrapper">
        <span className='logo'>Firact</span>
        <span className='title'>Login</span>
        <form action="">
            <input type="email" placeholder='email' />
            <input type="password" placeholder='password' />
            <button>Sign In</button>
        </form>
        <p>Don't  have an account ? Register</p>
    </div>
</div>
  )
}

export default Login