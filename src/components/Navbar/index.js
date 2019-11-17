import React from "react";
import "./style.css";

function Navbar({ score, highScore }) {
  return (
    <div className="container">
      <nav className="navbar navbar-dark bg-dark">
      <img src="react-icon.jpg" width="30" height="30" alt="" />
        <span className="navbar-text">
          CLICK Around Memory GAME
        </span>
        <span className="navbar-text score">
          Score {score}  | High Score {highScore}
        </span>
      </nav>
    </div>

  )
}

export default Navbar;
