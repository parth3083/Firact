import React from 'react'
import './Register.scss'
import Add from 'D:/Code/Web Development/project/Full stack/Firact/client/src/img/addAvatar.png'
function Register() {
  return (
      <div className='FormContainer'>
          <div className="FormWrapper">
              <span className='logo'>Firact</span>
              <span className='title'>Register</span>
              <form action="">
                  <input type="text" placeholder='name' />
                  <input type="email" placeholder='email' />
                  <input type="password" placeholder='password' />
                  <input style={{ display:"none"}} type="file" id='file'/>
                  <label htmlFor="file">
                      <img src={Add} alt="" />
                      Add your avatar
                  </label>
                  <button>Sign Up</button>
              </form>
              <p>Do you have an account ? Login</p>
          </div>
    </div>
  )
}

export default Register