import React from 'react'
import './Chats.scss'

function Chats() {
  return (
      <div className='chats'>
          <div className="userchat">
              <img src="https://images.unsplash.com/photo-1441786485319-5e0f0c092803?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D" alt="" />
              <div className="userdetails">
                  <h3 className='username'>DOMinator.jsx</h3>
                  <p className='msg'>Hey there whats going on</p>
              </div>
          </div>
    </div>
  )
}

export default Chats