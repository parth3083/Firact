import React from 'react'
import './Input.scss'
import attach from 'D:/Code/Web Development/project/Full stack/Firact/client/src/img/attach.png'
import photo from 'D:/Code/Web Development/project/Full stack/Firact/client/src/img/img.png'
function Input() {
  return (
      <div className='input'>
          <input type="text" placeholder='Type here something...' />

          <div className="right">
              <img src={attach} className='two' alt="" />
              <input type="file" id='file' style={{display:'none'}} />
              <label htmlFor="file" className='parth'>
                  <img src={photo}
                  width={"100%"}    alt="" />
                </label>
              <button>Send</button>
          </div>
    </div>
  )
}

export default Input