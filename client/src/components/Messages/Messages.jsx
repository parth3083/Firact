import React, { useContext, useEffect, useState } from "react";
import Message from "../Message/Message";
import "./Messages.scss";
import { ChatContext } from "../../Context/ChatContext";
import { db } from "../../firebase";
import { doc, onSnapshot } from "firebase/firestore";

function Messages() {
  const { data } = useContext(ChatContext);
  const [message, setmessage] = useState([]);
  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setmessage(doc.data().messages);
    });
    return () => {
      unsub();
    };
  }, [data.chatId]);
  return (
    <div className="messages">
      {message.map((m) => {
        return <Message key={m.id} message={m} />;
      })}
    </div>
  );
}

export default Messages;
