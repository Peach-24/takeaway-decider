import React, { Component } from "react";
import "./App.css";

import Selections from "./components/Selections";
import Header from "./components/Header";
import Randomizer from "./components/Randomizer";

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
    beginButtonClicked: false,
  };

  setErrorMessage = (msg) => {
    this.setState(() => {
      const newState = {
        errorMessage: msg,
      };
      return newState;
    });
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

  resetOptions = () => {
    this.setState(() => {
      const newState = {
        selected: [],
        errorMessage: "",
        beginButtonClicked: false,
      };
      return newState;
    });
  };

  handleBegin = () => {
    if (this.state.selected.length > 1) {
      this.setErrorMessage("");
      this.setState(() => {
        let newState = {
          beginButtonClicked: true,
        };
        return newState;
      });
      console.log(this.state.beginButtonClicked);
    } else {
      this.setErrorMessage("You need at least two options to pick from!");
    }
  };

  render() {
    return (
      <div className="App">
        <Header />
        {!this.state.beginButtonClicked ? (
          <>
            <Selections
              addToSelected={this.addToSelected}
              removeFromSelected={this.removeFromSelected}
              options={this.state.options}
              selected={this.state.selected}
            />
            <p className="errorMsg">{this.state.errorMessage}</p>
            <button onClick={() => this.handleBegin()}>Begin</button>
          </>
        ) : (
          <>
            <Randomizer
              options={this.state.selected}
              resetOptions={this.resetOptions}
            />
          </>
        )}
      </div>
    );
  }
}
