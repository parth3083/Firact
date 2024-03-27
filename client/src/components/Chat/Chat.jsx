import React from 'react'
import './Chat.scss'
import ChatHeader from '../Chatheader/ChatHeader'
import Messages from '../Messages/Messages'
import Input from '../Input/Input'

function Chat() {
  return (
    <div className='chat'>
      <ChatHeader />
      <Messages />
      <Input/>
    </div>
  )
}

export default Chat