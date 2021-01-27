import React from "react";
import "../App.css";

export default function Selections(props) {
  const { options, selected, addToSelected, removeFromSelected } = props;

  const FoodOptions = (props) => {
    const choices = props.food;
    const listItems = choices.map((foodType) => (
      <li
        key={foodType.id}
        className="food-option"
        onClick={() => addToSelected(foodType)}
      >
        {foodType.name}
      </li>
    ));
    return <ul>{listItems}</ul>;
  };
  const SelectedOptions = (props) => {
    const choices = props.food;
    const listItems = choices.map((foodType) => (
      <li
        key={foodType.id}
        className="food-option"
        onClick={() => removeFromSelected(foodType)}
      >
        {foodType.name}
      </li>
    ));
    return <ul>{listItems}</ul>;
  };

  return (
    <div className="App">
      <FoodOptions food={options} id="options-box" />
      <div id="selected">
        <SelectedOptions food={selected} />
      </div>
    </div>
  );
}
