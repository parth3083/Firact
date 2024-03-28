import React, { useContext } from 'react'
import './Navbar.scss';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { AuthContext } from '../../Context/AuthContext';

function Navbar() {
  const { currentUser } = useContext(AuthContext);
  return (
      <div className='navbar'>
          <h2 className='title'>Firact</h2>
          <div className='right'>
              <img src={currentUser.photoURL} alt="" />
        <h3 className='username'>{currentUser.displayName}</h3>
              <button onClick={()=>signOut(auth)}>Logout</button>
          </div>
    </div>
  )
}

export default Navbar