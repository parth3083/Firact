import React, { useContext, useEffect, useState } from "react";
import "./Chats.scss";
import { doc, onSnapshot } from "firebase/firestore";
import { AuthContext } from "../../Context/AuthContext";
import { db } from "../../firebase";
import { ChatContext } from "../../Context/ChatContext";
function Chats() {
  const [chats, setchats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);
  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setchats(doc.data());
      });
      return () => {
        unsub();
      };
    };
    currentUser.uid && getChats();
  }, [currentUser.uid]);
  const handleSelect = (u) => {
    dispatch({
      type: "CHANGE_USER",
      payload: u,
    });
  };
  return (
    <div className="chats">
      {chats && Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <div
            className="userchat"
            key={chat[0]}
            onClick={() => handleSelect(chat[1].userInfo)}
          >
            <img src={chat[1].userInfo.photoURL} alt="" />
            <div className="userdetails">
              <h3 className="username">{chat[1].userInfo.displayName}</h3>
              <p className="msg">{chat[1].lastMessage?.text}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Chats;
