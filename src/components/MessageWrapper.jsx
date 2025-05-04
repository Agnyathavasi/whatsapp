import React from "react";
import { useSelector } from "react-redux";
import Message from "./Message";
import "../assets/css/message.css";

const MessageWrapper = () => {
  const activeChatId = useSelector((state) => state.chat.activeChatId);
  const messages =
    useSelector((state) => state.chat.messages[activeChatId]) || [];
  return (
    <div className="messages" style={{ margin: "15px 0" }}>
      <Message content={messages} />
    </div>
  );
};

export default MessageWrapper;
