import React from "react";
import { useDispatch } from "react-redux";
import { setActiveChat } from "../store/messageSlice";
import "../assets/css/card.css";

function Card(props) {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(setActiveChat(props.id));
  }

  let message;
  if (props.sent === "true") {
    message = (
      <p className="message">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-check2"
          viewBox="0 0 16 16"
          style={{ marginRight: "2px" }}
        >
          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
        </svg>
        {props.message}
      </p>
    );
  } else if (props.seen === "true") {
    message = (
      <p className="message">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="rgb(3, 184, 184)"
          className="bi bi-check2-all"
          viewBox="0 0 16 16"
          style={{ marginRight: "2px" }}
        >
          <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z" />
          <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z" />
        </svg>
        {props.message}
      </p>
    );
  } else if (props.recieved === "true") {
    message = <p className="message">{props.message}</p>;
  }

  return (
    <div className="card_con" onClick={handleClick}>
      <img src={props.img} alt="Maachuda"></img>
      <div className="body">
        <div className="top">
          <h5 className="name">{props.name}</h5>
          <span>
            <p className="time">{new Date(props.time).toLocaleDateString()}</p>
          </span>
        </div>
        <div className="bottom">{message}</div>
      </div>
    </div>
  );
}

export default Card;
