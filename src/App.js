import React, { Component } from "react";
import "./App.css";

import Selections from "./components/Selections";
import Header from "./components/Header";

export default class App extends Component {
  state = {
    options: [
      { id: 1, name: "Chinese 🥡" },
      { id: 2, name: "Indian 🍛" },
      { id: 3, name: "Pizza 🍕" },
      { id: 4, name: "Fried Chicken 🍗" },
      { id: 5, name: "Thai 🇹🇭" },
      { id: 6, name: "Fish & Chips 🍤" },
    ],
    selected: [],
    errorMessage: "",
  };

  addToSelected = (item) => {
    this.setState(() => {
      const newState = {
        selected: [...this.state.selected, item],
      };

      return newState;
    });
  };

  removeFromSelected = (item) => {
    this.setState(() => {
      let newArr = this.state.selected.filter(
        (food) => food.name !== item.name
      );
      const newState = {
        selected: newArr,
      };
      return newState;
    });
  };

  render() {
    return (
      <div className="App">
        <Header />

        <Selections
          addToSelected={this.addToSelected}
          removeFromSelected={this.removeFromSelected}
          options={this.state.options}
          selected={this.state.selected}
        />

        <p>{this.state.errorMessage}</p>
        <button>Begin</button>
      </div>
    );
  }
}
