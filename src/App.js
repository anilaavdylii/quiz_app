import { useState, useEffect } from "react";
import "./App.css";
import FinalPage from "./Components/FinalPage";
import QuestionsPage from "./Components/QuestionsPage";
import StartingPage from "./Components/StartingPage";

function App() {
  const [username, setUsername] = useState("");
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);

  const [theme, setTheme] = useState("light");

  const [showStartingPage, setShowStartingPage] = useState(true);
  const [showQuestionsPage, setShowQuestionsPage] = useState(false);
  const [showFinalPage, setShowFinalPage] = useState(false);

  useEffect(()=>{
    localStorage.setItem('Top Score', JSON.stringify(topScore));
  })

  return (
    <div className={theme === "light" ? "container-lg light" : "container-lg dark"} >

      {showStartingPage && (
        <StartingPage
          setShowStartingPage={setShowStartingPage}
          setShowQuestionsPage={setShowQuestionsPage}
          topScore={topScore}
          username={username}
          setUsername={setUsername}
          theme={theme}
          setTheme={setTheme}
        />
      )}
      {showQuestionsPage && (
        <QuestionsPage
          score={score}
          setScore={setScore}
          setShowQuestionsPage={setShowQuestionsPage}
          setShowFinalPage={setShowFinalPage}
        />
      )}
      {showFinalPage && (
        <FinalPage
          score={score}
          topScore={topScore}
          setTopScore={setTopScore}
          setShowStartingPage={setShowStartingPage}
          setShowFinalPage={setShowFinalPage}
          setScore={setScore}
          username={username}
          setUsername={setUsername}
        />
      )}
    </div>
  );
}

export default App;