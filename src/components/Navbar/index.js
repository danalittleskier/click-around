import React from "react";
import "./style.css";

function Navbar({ score, highScore }) {
  return (
    <div className="container">
      <nav className="navbar navbar-light bg-light">
      <img src="react-icon.jpg" width="30" height="30" alt="" />
        <span className="navbar-text">
          Memory Game React App
        </span>
        <span className="navbar-text">
          Score {score}  | High Score {highScore}
        </span>
      </nav>
    </div>

  )
}

export default Navbar;
