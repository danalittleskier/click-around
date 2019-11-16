import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from "./images.json";

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards,
    score: 0
  };

  updateScore = () => {
    this.setState({ score: this.state.score + 1 });
    console.log(this.state.score);
  }

  randomizeCards = id => {
    const updateCards = this.state.cards
      .map(onecard => { 
        if (onecard.id === id) {
          onecard.clicked = true;
          this.updateScore();
          return onecard;
        }
          return onecard; 
        });

    const cards = updateCards.map((a) => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map((a) => a[1]);
    this.setState({ cards });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Click Around</Title>
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

