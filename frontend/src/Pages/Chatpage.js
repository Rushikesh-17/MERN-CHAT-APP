import React, { useEffect, useState } from 'react';
import axios from "axios";

const Chatpage = () => {
 
    const [chats, setChats] = useState([]);

    const fetchdata = async() => {
        const { data } = await axios.get("/api/chats")
        setChats(data)
    }
    useEffect(() => {
        fetchdata();
    }, []);


  return (
    <div>
      Chatpage
      {chats.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
    </div>
  );
}

export default Chatpage