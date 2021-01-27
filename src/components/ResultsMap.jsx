import React from "react";

export default function ResultsMap(props) {
  const { winner, resetOptions } = props;
  return (
    <div>
      <h1>Local {winner.slice(0, winner.length - 4)} takeaways</h1>
      <button onClick={() => resetOptions()} className="home-button">
        🏠
      </button>
    </div>
  );
}
