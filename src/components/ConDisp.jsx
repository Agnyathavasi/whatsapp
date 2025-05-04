import React, { useRef, useState, useEffect } from "react";
import "../assets/css/condisp.css";
import { useDispatch, useSelector } from "react-redux";
import imag from "../assets/imgs/userProfile.png";
import MessageWrapper from "./MessageWrapper";
import { addMessage } from "../store/messageSlice";

function Condisp(props) {
  const contacts = useSelector((state) => state.contacts);

  const [inputText, setText] = useState("");
  const [scrollKey, setScorllKey] = useState(false);

  const current = contacts.filter((item) => item.id === props.number);
  const image = current[0].profilePic || imag;
  const dispatch = useDispatch();
  const scrollableRef = useRef(null);

  useEffect(() => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollTop = scrollableRef.current.scrollHeight;
    }
  }, [scrollKey]);

  function addText(type) {
    const payload = {
      id: new Date().getTime(),
      reciever: type === "send" ? "me" : props.number,
      sender: type === "send" ? props.number : "me",
      isSeen: false,
      isDelivered: false,
      content: inputText,
      timestamp: new Date().toISOString(),
    };
    dispatch(addMessage({ contactId: props.number, message: payload }));
    setText("");
    setScorllKey((prev) => !prev);
  }

  function timeDifference(current, previous) {
    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerMinute) {
      return Math.round(elapsed / 1000) + " seconds ago";
    } else if (elapsed < msPerHour) {
      return Math.round(elapsed / msPerMinute) + " minutes ago";
    } else if (elapsed < msPerDay) {
      return Math.round(elapsed / msPerHour) + " hours ago";
    } else if (elapsed < msPerMonth) {
      return "approximately " + Math.round(elapsed / msPerDay) + " days ago";
    } else if (elapsed < msPerYear) {
      return (
        "approximately " + Math.round(elapsed / msPerMonth) + " months ago"
      );
    } else {
      return "approximately " + Math.round(elapsed / msPerYear) + " years ago";
    }
  }

  return (
    <div className="sect">
      <div className="topBar">
        <div className="imag">
          <img src={image} alt="Maachuda"></img>
        </div>
        <div className="texts">
          <div className="">
            <h6 className="">{current[0].name}</h6>
            <span>
              <p className="">
                last seen{" "}
                {timeDifference(new Date(), new Date(current[0].lastSeen))}
              </p>
            </span>
          </div>
        </div>

        <div className="icons">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="darkGrey"
            className="bi bi-three-dots-vertical"
            viewBox="0 0 16 16"
          >
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
          </svg>
        </div>
      </div>
      <div
        ref={scrollableRef}
        className="message-canvas"
        style={{ overflowY: "scroll" }}
      >
        <MessageWrapper />
      </div>
      <div className="bottomBar">
        <div className="icons">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="darkGrey"
            className="bi bi-emoji-smile"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
          </svg>
        </div>

        <input
          className="input"
          placeholder="Type a message"
          value={inputText}
          onInput={(e) => setText(e.target.value)}
        />
        {/* </div> */}
        <div className="icons">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            style={{ transform: "rotate(45deg)", marginRight: "10px" }}
            fill="darkGrey"
            className="bi bi-send-fill"
            viewBox="0 0 16 16"
            onClick={() => addText("recieve")}
          >
            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="darkGrey"
            style={{ transform: "rotate(225deg)", marginLeft: "10px" }}
            className="bi bi-send-fill"
            viewBox="0 0 16 16"
            onClick={() => addText("send")}
          >
            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
          </svg>
          {/* <span className="bi bi-send-fill"></span> */}
        </div>
      </div>
    </div>
  );
}

export default Condisp;
