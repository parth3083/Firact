import React, { useContext } from 'react'
import './ChatHeader.scss'
import Add from 'D:/Code/Web Development/project/Full stack/Firact/client/src/img/add.png' 
import Call from 'D:/Code/Web Development/project/Full stack/Firact/client/src/img/cam.png'
import More from 'D:/Code/Web Development/project/Full stack/Firact/client/src/img/more.png'
import { ChatContext } from '../../Context/ChatContext'
function ChatHeader() {
  const { data } = useContext(ChatContext);
  return (
      <div className='chatheader'>
      <h2 className='title'>{data.user?.displayName }</h2>
          <div className="headericons">
              <img src={Add} alt="" />
              <img src={Call} alt="" />
              <img src={More} alt="" />
          </div>
    </div>
  )
}

export default ChatHeader