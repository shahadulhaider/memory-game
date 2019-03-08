import React, { Component } from 'react';

import Header from './components/Header';
import Instructions from './components/Instructions';
import Game from './components/Game';


class App extends Component {

  state = {
    cards: [],
    guessed: [],
    currentScore: 0,
    topScore: 0,
    cheat: false,
    instructions: "Click on all twelve cards without any duplicates. Click a card to get started."
  }

  componentDidMount() {
    let cards = [];

    [...Array(12).keys()].forEach(i => {
      cards.push({ id: i, order: i, src: i });
    });

    this.setState({
      cards: cards
    })
  }

  shuffleCards = () => {
    let shuffledCards = [];
    let randomOrder = [...Array(12).keys()].sort(() => Math.random() - 0.5);
    this.state.cards.forEach((card, index) => {
      card.order = randomOrder[index];
      shuffledCards.push(card);
    });

    shuffledCards.sort((a, b) => { return a.order - b.order });

    this.setState({
      cards: shuffledCards
    })
  }

  handleClick = (event) => {
    if (this.state.guessed.length === this.state.cards.length - 1
      && this.state.guessed.includes(event.target.getAttribute("data-value")) === false
    ) {
      this.setState({
        guessed: [],
        currentScore: this.state.currentScore + 1,
        topScore: Math.max(this.state.topScore, this.state.currentScore + 1),
        instructions: "Great job! You got them all! Click a new card to start a new game."
      });
    } else if (this.state.currentScore === 12) {
      this.setState({
        guessed: [...this.state.guessed, event.target.getAttribute("data-value")],
        currentScore: 1,
        instructions: "So far so good; that was a new card. Click another!"
      });
    } else if (this.state.guessed.includes(event.target.getAttribute("data-value"))) {
      this.setState({
        guessed: [],
        currentScore: 0,
        instructions: "Shoot, you had already clicked that card! Click a new card to start a new game."
      })
    } else {
      this.setState({
        guessed: [...this.state.guessed, event.target.getAttribute("data-value")],
        currentScore: this.state.currentScore + 1,
        topScore: Math.max(this.state.topScore, this.state.currentScore + 1),
        instructions: "So far so good; that was a new card. Click another!"
      })
    }

    this.shuffleCards();
  }

  handleCheatClick = (event) => {
    if (document.getElementById("cheatbox").checked) {
      this.setState({
        cheat: true
      });
    } else {
      this.setState({
        cheat: false
      });
    }
    console.log(this.state.cheat);
  }

  render() {
    return (
      <div>
        <Header
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
        />
        <Instructions
          instructions={this.state.instructions}
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
        />
        <Game
          cards={this.state.cards}
          guessed={this.state.guessed}
          handleClick={this.handleClick}
          cheat={this.state.cheat}
        />
        <div className="container center">
          <form>
            Cheat: <input type="checkbox" id="cheatbox" onClick={this.handleCheatClick} />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
