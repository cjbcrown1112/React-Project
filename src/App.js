import React, { Component } from "react";
import MemeCard from "./MemeCard";
import Combine from "./Combine";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import memes from "./memes.json";
import "./styles.css";

class App extends Component {
  state = {
    memes,
    highScore: 0,
    currentScore: 0,
    Clicked: false
  };

  handleClick = (id) => {
    this.shuffleArray();
    this.handleScore(id);
    console.log(this.state.timesClicked);
  };

  handleScore = (id) => {
    this.state.memes.forEach((element) => {
      if (id === element.id && element.clicked === false) {
        element.clicked = true;
        this.setState({ Clicked: false });
        this.handleIncrement();
      } else if (id === element.id && element.clicked === true) {
        if (this.state.currentScore > this.state.highScore) {
          this.setState({ highScore: this.state.currentScore });
        }
        this.setState({ currentScore: 0 });
        this.setState({ Clicked: true });
        this.state.memes.forEach((element) => (element.clicked = false));
        console.log(this.state.memes);
      }
    });
  };

  shuffleArray = () => {
    const shuffledArr = this.shuffle(this.state.memes);

    this.setState({ shuffledArr });
  };

  handleIncrement = () => {
    this.setState({ currentScore: this.state.currentScore + 1 });
  };

  shuffle = (array) => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  render() {
    return (
      <Combine>
        <Navbar
          currentScore={this.state.currentScore}
          highScore={this.state.highScore}
        />
        <Jumbotron />
        {this.state.memes.map((meme) => (
          <MemeCard
            Clicked={this.state.Clicked}
            handleClick={this.handleClick}
            id={meme.id}
            key={meme.id}
            name={meme.name}
            image={meme.image}
          />
        ))}
      </Combine>
    );
  }
}

export default App;
