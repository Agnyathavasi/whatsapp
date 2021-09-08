import React, { useState } from "react";
import "../css/mainsection.css";
import Homepage from './homeScreen';
import Condisp from "./ConDisp";

function MainPage(props) {

  let [disp, setDisp] = useState(0);

  disp = props.toDisplay;

  return (
    disp === 0 ? <Homepage /> : <Condisp number={disp}/>
  );
}

export default MainPage;
