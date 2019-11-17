import React from "react";
import "./style.css";

function ImageCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} onClick={() => props.randomizeCards(props.id)} />
      </div>
      <div className="content">
        <ul>
          <li>
             {props.name}
          </li>
        </ul>
      </div>
      <span onClick={() => props.randomizeCards(props.id)} className="clicky">
        Click
      </span>
    </div>
  );
}

export default ImageCard;
