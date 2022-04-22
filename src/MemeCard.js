import React from "react";

function MemeCard(props) {
  return (
    <div
      className={"card " + (props.Clicked ? "animate" : "")}
      onClick={() => props.handleClick(props.id)}
    >
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="img-content">
        <ul>
          <li>
            <strong>Meme: </strong>
            {props.name}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MemeCard;
