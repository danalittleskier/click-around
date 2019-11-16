import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
//import Title from "./components/Title";
import Instructions from "./components/Instructions";
import Navbar from "./components/Navbar";
import cards from "./images.json";

class App extends Component {

  state = {
    cards,
    score: 0,
    highScore: 0
  };

  checkHighScore = () => {
    if(this.state.score >=  this.state.highScore){
      this.setState({ highScore: this.state.score +1 })
    }    
  }
  
  updateScore = () => {
    this.setState({ score: this.state.score + 1 });
  }

  resetScore = () => {
    this.setState({ score: 0 });
  }

  randomizeCards = id => {
    const updateCards = this.state.cards
      .map(onecard => { 
        if (onecard.id === id) {
          onecard.clicked ? this.resetScore() : this.updateScore();
          this.checkHighScore();
          onecard.clicked = true;
          return onecard;
        }
          return onecard; 
        });

    const cards = updateCards.map((a) => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map((a) => a[1]);
    this.setState({ cards });
  };

 
  render() {
    return (
    <Wrapper>
      <Navbar score={this.state.score} highScore= {this.state.highScore}  /> 
        <Instructions>Avoid clicking on the same tree twice to score points! </Instructions>
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

