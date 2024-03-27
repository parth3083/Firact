import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Chat from '../../components/Chat/Chat'
import './Home.scss'

function Home() {
  return (
      <div className="home">
          <div className="container">
              <Sidebar />
              <Chat/>
          </div>
    </div>
  )
}

export default Home