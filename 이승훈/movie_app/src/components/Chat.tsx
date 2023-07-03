import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "./Chat.css";

const socket = io("http://localhost:3001"); // 서버의 URL에 맞게 변경

type messageType = {
  color: string;
  username: string;
  content: string;
  time: string;
};

function Chat() {
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState<messageType[]>([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    socket.on("message", handleMessage);
    return () => {
      socket.off("message", handleMessage);
    };
  }, []);

  const handleMessage = (message: messageType) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleMessageSend = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      const currentTime = new Date().toLocaleTimeString();
      socket.emit("message", {
        username,
        content: inputValue,
        time: currentTime,
      });
      setInputValue("");
    }

    setUsername("");
  };

  return (
    <div className="ChatArea">
      <div className="ChatText">
        {messages.map((message, index) => (
          <p key={index} style={{ color: message.color }}>
            {message.username}: {message.content} - {message.time}
          </p>
        ))}
      </div>

      <div className="ChatInputArea">
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="이름"
          className="ChatUserName"
        />
        <form className="ChatTextArea">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="ChatText"
          />
          <input type="submit" onClick={handleMessageSend} value="전송" />
        </form>
      </div>
    </div>
  );
}

export default Chat;
