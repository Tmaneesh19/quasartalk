import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import "./Homepage.css"; // For background video and styles

function Homepage() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <div className="homepage">
      <div className="background-image-container">
  <img src="/assets/background_image.png" alt="Background" className="background-image" />
  {/* Your content goes here */}
</div>



      {/* Welcome Text */}
     <div className="welcome-text">
  <h1 className="content-h1 cwhite1">
    <span className="jelly hblue animjelly">Q</span>
    <span className="jelly">u</span>
    <span className="jelly hblue animjelly">a</span>
    <span className="jelly">s</span>
    <span className="jelly hblue animjelly">a</span>
    <span className="jelly">r</span>
    <span className="jelly hblue animjelly">T</span>
    
    <span className="jelly">a</span>
    <span className="jelly hblue animjelly">l</span>
    
    <span className="jelly hblue animjelly">k</span>
    &nbsp;
    <span className="jelly">A</span>
    <span className="jelly hblue animjelly">w</span>
    <span className="jelly">a</span>
    <span className="jelly hblue animjelly">i</span>
    <span className="jelly">t</span>
    <span className="jelly hblue animjelly">s</span>
    &nbsp;
    <span className="jelly">y</span>
    <span className="jelly hblue animjelly">o</span>
    <span className="jelly">u</span>
    <span className="jelly">!</span>
  </h1>
</div>

      {/* Buttons at Top Right */}
      <div className="button-container">
        <button
          className="btn-login"
          onClick={() => {
            setShowLogin(true);
            setShowSignup(false);
          }}
        >
          Login
        </button>
        <button
          className="btn-signup"
          onClick={() => {
            setShowSignup(true);
            setShowLogin(false);
          }}
        >
          Sign Up
        </button>
      </div>

      {/* Login or Signup Components */}
      {showLogin && (
        <div className="auth-modal">
          <Login />
        </div>
      )}
      {showSignup && (
        <div className="auth-modal">
          <Signup />
        </div>
      )}
    </div>
  );
}

export default Homepage;
