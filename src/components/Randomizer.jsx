import React, { useState, useEffect } from "react";

export default function Randomizer(props) {
  const [loaded, setLoaded] = useState(false);
  const [options, setOptions] = useState([]);
  const [winner, setWinner] = useState("");
  const [spinsLeft, setSpinsLeft] = useState(1);

  const randomize = (arr) => {
    let index = Math.floor(Math.random() * (arr.length - 1 - 0 + 1)) + 0;
    console.log(index);
    return arr[index].name;
  };

  const resetOptions = props.resetOptions;
  const goToMap = props.goToMap;

  useEffect(() => {
    setOptions(props.options);
    setWinner(randomize(props.options));
    setLoaded(true);
  }, []);

  const handleReSpin = () => {
    if (spinsLeft > 0) {
      console.log("clicked!");
      setWinner(randomize(options));
      setSpinsLeft(spinsLeft - 1);
    }
  };

  return (
    <div>
      <h1>Winner:</h1>
      <p className="winner">{winner}</p>
      <div>
        <button className="results-buttons" onClick={() => goToMap(winner)}>
          <p>
            Discover local <strong>{winner.slice(0, winner.length - 4)}</strong>{" "}
            takeaways
          </p>
        </button>

        {spinsLeft === 0 ? (
          <button className="results-buttons" disabled>
            Spin again ({spinsLeft})
          </button>
        ) : (
          <button className="results-buttons" onClick={() => handleReSpin()}>
            Spin again ({spinsLeft})
          </button>
        )}
        <button onClick={() => resetOptions()} className="home-button">
          🏠
        </button>
      </div>
    </div>
  );
}
