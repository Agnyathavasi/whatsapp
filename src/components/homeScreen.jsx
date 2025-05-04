import React from "react";
import "../assets/css/homeScreen.css";
import image from "../assets/imgs/bg.jpg";

function Homepage(props) {
  return (
    <div className="section">
      <div className="content">
        <img src={image} alt="gaand mara"></img>
        <h2>Keep your phone connected</h2>
        <p>
          Whatsapp connects to your phone to sync messages. To reduce data
          usage, connect your phone to Wi-Fi.
        </p>
        <div className="line"></div>
        <p className="bottom">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-laptop"
            viewBox="0 0 16 16"
          >
            <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
          </svg>{" "}
          WhatsApp is available for Windows. {props.toDisplay}
          <span> Get it Here</span>
        </p>
      </div>
    </div>
  );
}

export default Homepage;
