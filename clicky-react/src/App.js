// This actually imports the React node modules
import React, { Component } from 'react';
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';
import tiles from "./tiles.json";

class App extends Component {
  state = {
    tiles: tiles,
    score: 0,
    maxScore: 12,
    topScore: 0,
    message: "Click an image to begin!"
  };

  resetGame = (id) => {
    const tilez = this.state.tiles;
    for (let i = 0; i < tilez.length; i++) {
      tilez[i].clicked = false;
    }
    this.setState({score: 0})
  }

  // Click handler to set the clicked state to true
  handleSaveClick = (id) => {
      const tilez = this.state.tiles;
      const tileClicked = tilez.filter(tile => tile.id === id);
      console.log(tileClicked[0].clicked);
    if (!tileClicked[0].clicked) {
      tileClicked[0].clicked = true;
      this.handleCorrectClick();
      console.log(tileClicked[0].clicked);

      tilez.sort((a, b) => {
				return 0.5 - Math.random();
			});

			this.setState({tilez});

    }
    else {
      console.log("Already clicked", id);
      this.handleIncorrectClick();
    }
  }

  /* If correct click, update the score, top score, and message in navbar.
  If the score reaches the max score of 12, display the "you win" message in the navbar.*/
  handleCorrectClick = () => {
    if (this.state.score+1 > this.state.topScore) {
      this.setState({topScore: this.state.topScore+1})
    }
    if (this.state.score+1 >= this.state.maxScore) {
      this.setState({score: this.state.score+1, message: "Congrats! You win!", messageClass:"correct"})
    }else{
      this.setState({score: this.state.score+1, message: "You guessed correctly!", messageClass:"correct"})
    }
  }

  handleIncorrectClick = () => {
    this.setState({message: "Incorrect. Play again?"})
    this.resetGame();
  }

  // Render the App component on the page
  render() {
    return (
      <div className="fluid-container lodge h-100vh">
        <Navbar
          score={this.state.score}
          topScore={this.state.topScore}
          message={this.state.message}
        />
        <Header />

        <div className="d-flex justify-content-center main-content mx-auto flex-wrap">
          {this.state.tiles.map(tile => ( 
          <Card 
            key={tile.id}
            id={tile.id}
            name={tile.name}
            image={tile.image}
            clicked={tile.clicked}
            clickHandler = {this.handleSaveClick}
          />
        ))}
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
