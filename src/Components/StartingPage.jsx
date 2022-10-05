import React from "react";
import Card from "./Card";

import "./StartingPage.css";

const StartingPage = ({
  setShowStartingPage,
  setShowQuestionsPage,
  topScore,
  username,
  setUsername,
  theme, 
  setTheme
}) => {
  const startGame = () => {
    if (username.trim().length > 0) {
      setShowStartingPage(false);
      setShowQuestionsPage(true);
    }
  };


  return (
    <Card>
      <h1 className="header">Welcome to Quiz Game!</h1>
      <label className="dropdown">
            <select className="form-control theme" value={theme} onChange={(event)=>{ setTheme(event.target.value)}}>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
      </label>

      <h3 className="primary_text">Please enter your username.</h3>
      <input
        type="text"
        placeholder="Username"
        className="username_input"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button className="start_btn" onClick={startGame}>
        Let's play
      </button>

      <p className="top_score">
        Top score: <span>{topScore}</span>
      </p>
    </Card>
  );
};

export default StartingPage;