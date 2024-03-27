import React from 'react'
import './Navbar.scss';

function Navbar() {
  return (
      <div className='navbar'>
          <h2 className='title'>Firact</h2>
          <div className='right'>
              <img src="https://images.unsplash.com/photo-1601972653460-fe3048709178?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D" alt="" />
              <h3 className='username'>Parth</h3>
              <button>Logout</button>
          </div>
    </div>
  )
}

export default Navbar