import React from "react";
import "./customBtn.css"
function CustomBtn(props) {
  return <button className={props.title}><img src={props.image}/>{props.title}</button>;
}
export default CustomBtn;
