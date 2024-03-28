import React, { useContext, useState } from "react";
import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import { db } from "../../firebase";
import { AuthContext } from "../../Context/AuthContext";
import "./Search.scss";
function Search() {
  const [username, setusername] = useState("");
  const [user, setuser] = useState(null);
  const [error, seterror] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setuser(doc.data());
      });
    } catch (error) {
      seterror(true);
    }
  };
  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    const combinedID =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
   try {
       const res = await getDoc(doc(db, "chats", combinedID));
       if (!res.exists()) {
           await setDoc(doc(db, "chats", combinedID), { messages: [] })
           
           //    creating the user chats 
           await updateDoc(doc(db, "userChats", currentUser.uid), {
               [combinedID + ".userInfo"]: {
                   uid: user.uid,
                   displayName: user.displayName,
                   photoURL: user.photoURL,
               },
               [combinedID + ".date"]: serverTimestamp()
           });
           await updateDoc(doc(db, "userChats", user.uid), {
               [combinedID + ".userInfo"]: {
                   uid: currentUser.uid,
                   displayName: currentUser.displayName,
                   photoURL: currentUser.photoURL,
               },
               [combinedID + ".date"]: serverTimestamp()
           });
       }
   } catch (error) {
       seterror(true)
       console.log(error)
    }
    setuser(null);
    setusername("")
  };

  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find a user"
          onKeyDown={handleKey}
          onChange={(e) => setusername(e.target.value)}
          value={username}
        />
      </div>
      {error && <h3>User not Found</h3>}
      {user && (
        <div className="userchat" onClick={handleSelect}>
          <img src={user.photoURL} alt="" />
          <div className="userdetails">
            <h3 className="username">{user.displayName}</h3>
            <p className="msg">Hey there whats going on</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
