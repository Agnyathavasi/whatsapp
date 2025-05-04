import React from "react";
import "../assets/css/message.css";

const getStatusIcon = (message) => {
  if (!message || message.sender !== "me") return null;

  if (message.isSeen) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="#46adce"
        className="bi bi-check2-all"
        viewBox="0 0 16 16"
      >
        <path
          d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0zm-4.208 7-.896-.897.707-.707.543.543
        6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0"
        />
        <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708" />
      </svg>
    );
  } else if (message.isDelivered) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="rgb(135, 141, 138)"
        className="bi bi-check2-all"
        viewBox="0 0 16 16"
      >
        <path
          d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0zm-4.208 7-.896-.897.707-.707.543.543
        6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0"
        />
        <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708" />
      </svg>
    );
  } else {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="rgb(135, 141, 138)"
        className="bi bi-check2"
        viewBox="0 0 16 16"
      >
        <path
          d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293
        l6.646-6.647a.5.5 0 0 1 .708 0"
        />
      </svg>
    );
  }
};

const Message = ({ content }) => {
  if (!content || content.length === 0) return null;

  const [current, ...rem] = content;

  return (
    <>
      <section className="message">
        <div className={`${current.sender === "me" ? "sent" : "received"}`}>
          <span className="content">{current.content}</span>
          <div className="bottomInfo">
            <span className="sent-time">
              {new Date(current.timestamp).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
            </span>
            <span className="read-status">{getStatusIcon(current)}</span>
          </div>
        </div>
      </section>
      {rem.length !== 0 && <Message content={rem} />}
    </>
  );
};

export default Message;
