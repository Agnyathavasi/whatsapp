import React from "react";
import "../assets/css/contacts.css";
import Card from "./card";
import ConHead from "./conHeader";
import SearchBar from "./searchBar";
import imag from "../assets/imgs/userProfile.png";
import { useSelector } from "react-redux";

function Contacts() {
  const contacts = useSelector((state) => state.contacts);

  let array = contacts;
  return (
    <div className="screen">
      <div className="screen-header">
        <ConHead />
        <SearchBar />
      </div>
      <div className="displayContacts">
        {array.map((item, index) => {
          const image = item.img === "" ? imag : item.profilePic;
          return (
            <div className="itemContact" key={index}>
              <Card
                id={item.id}
                name={item.name}
                time={item.lastSeen}
                img={image}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Contacts;
