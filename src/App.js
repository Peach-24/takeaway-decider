import React, { Component } from "react";
import "./App.css";

import Selections from "./components/Selections";
import Header from "./components/Header";
import Randomizer from "./components/Randomizer";
import ResultsMap from "./components/ResultsMap";

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
    visitMap: false,
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
        visitMap: false,
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
  goToMap = (cuisine) => {
    this.setState(() => {
      const newState = {
        visitMap: true,
        winningFood: cuisine,
      };
      return newState;
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        {this.state.visitMap ? (
          <>
            <ResultsMap
              winner={this.state.winningFood}
              resetOptions={this.resetOptions}
            />
          </>
        ) : !this.state.beginButtonClicked ? (
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
              goToMap={this.goToMap}
            />
          </>
        )}
      </div>
    );
  }
}
