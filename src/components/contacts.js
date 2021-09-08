import React from "react";
import "../css/contacts.css";
import Card from "./card";
import ConHead from "./conHeader";
import SearchBar from "./searchBar";
import imag from '../imgs/userProfile.png'
import cont from "./arrayCon";

function Contacts(props) {

  function presseditem(id){
    props.onSelect(id+1);
  }

  let array = cont;
  return (
    <div className="screen">
      <ConHead />
      <SearchBar />
      <div className="displayContacts">
        {array.map((item, index) => {
          let image
          item.img ==="" ? image=imag : image = item.img
          return (<div className="itemContact">
            <Card
              id={index}
              name={item.name}
              seen={item.seen}
              sent={item.sent}
              recieved={item.recieved}
              key={item.id}
              message={item.message}
              time={item.time}
              img={image}
              onpress={presseditem}
            />
          </div>);
        })}
      </div>
    </div>
  );
}

export default Contacts;
