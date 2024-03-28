import React, { useContext, useState } from "react";
import "./Input.scss";
import attach from "D:/Code/Web Development/project/Full stack/Firact/client/src/img/attach.png";
import photo from "D:/Code/Web Development/project/Full stack/Firact/client/src/img/img.png";
import { AuthContext } from "../../Context/AuthContext";
import { ChatContext } from "../../Context/ChatContext";
import { v4 as uuid } from "uuid";
import { db, storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, updateDoc, Timestamp,serverTimestamp, arrayUnion } from "firebase/firestore";
function Input() {
  const [text, settext] = useState("");
  const [img, setimg] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSubmit = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);
      uploadTask.on(
        (error) => {
          seterror(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }
    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    settext("");
    setimg(null);
  };

  return (
    <div className="input">
      <input
        type="text"
        placeholder="Type here something..."
        onChange={(e) => settext(e.target.value)}
        value={text}
      />

      <div className="right">
        <img src={attach} className="two" alt="" />
        <input
          type="file"
          id="file"
          style={{ display: "none" }}
          onChange={(e) => setimg(e.target.files[0])}
        />
        <label htmlFor="file" className="parth">
          <img src={photo} width={"100%"} alt="" />
        </label>
        <button onClick={handleSubmit}>Send</button>
      </div>
    </div>
  );
}

export default Input;
