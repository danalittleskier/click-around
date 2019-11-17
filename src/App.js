import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Instructions from "./components/Instructions";
import Navbar from "./components/Navbar";
import cards from "./images.json";

class App extends Component {

  state = {
    cards,
    clickedCards: [],
    instructions: "Click on Trees to score points! Don't select the same image or the game is over! ",
    score: 0,
    highScore: 0
  };

  checkHighScore = () => {
    if (this.state.score >= this.state.highScore) {
      this.setState({
        highScore: this.state.score + 1,
        instructions: "New HIGH SCORE! Click some more"
      }) 
    }
  }

  updateScore = (id) => {
    this.setState({
      clickedCards: [...this.state.clickedCards, id],
      instructions: "Good choice keep clickin!",
      score: this.state.score + 1
    });
    this.checkHighScore();
  }

  resetScore = () => {
    document.querySelector(".instructions").classList.add("shakeno");
    this.setState({
      clickedCards: [],
      instructions: "GAME OVER! Try Again!",
      score: 0
    });
  }

  randomizeCards = id => {
    //Update instructions after game is over
    const instructions = "Click on Trees to score points! Don't select the same image or the game is over! ";
    this.setState({ instructions });

    //check if the image has been clicked before
    this.state.clickedCards.includes(id) ? this.resetScore() : this.updateScore(id);
    document.querySelector(".instructions").classList.remove("shakeno");

    //randomize the array of cards
    const cards = this.state.cards.map((a) => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map((a) => a[1]);
    this.setState({ cards });
  };


  render() {
    return (
      <Wrapper>
        <Navbar score={this.state.score} highScore={this.state.highScore} />
        <Instructions>{this.state.instructions} </Instructions>
        {this.state.cards.map(card => (
          <ImageCard
            randomizeCards={this.randomizeCards}
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}
            clicked={card.clicked}

          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

