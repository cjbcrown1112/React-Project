import React from "react";

function Jumbotron(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        {props.children}
        <p className="lead">
          Click on a Meme ONLY ONCE! to get points while the Memes shuffle on
          every CLICK!
        </p>
      </div>
    </div>
  );
}

export default Jumbotron;
