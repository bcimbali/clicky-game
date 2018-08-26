// This actually imports the React node modules
import React, { Component } from 'react';
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';
import tiles from "./tiles.json";

class App extends Component {
  constructor() {
  super();
  this.state = {
    isGuessCorrect: true,
    tiles: tiles,
    score: 0,
    maxScore: 12,
    topScore: 0,
    message: "CLICK AN IMAGE TO BEGIN!"
  }
  this.removeAnimation = this.removeAnimation.bind(this);
  };

  // Removes animation CSS class
  removeAnimation = () => {
    // Grab the text at the top middle of the page
    let element = document.getElementById("animate-this");
    // If the guess is correct...
    if (this.state.isGuessCorrect) {
      // ...remove the animation style of the correct guess
      element.classList.remove('jello-vertical');
    }
    // If the guess is incorrect...
    if (!this.state.isGuessCorrect) {
      // ...remove the animation style of the incorrect guess
      element.classList.remove('shake-horizontal');
    }
  }

  // Adds animation CSS class
  addAnimation = (isCorrect) => {
    // Grab the text at the top middle of the page
    let element = document.getElementById("animate-this");
    // If the guess is correct...
    if (isCorrect) {
      // ...add the animation style of the correct guess
      element.classList.add('jello-vertical');
    }
    // If the guess is incorrect...
    if (!isCorrect) {
      // ...add the animation style of the incorrect guess
      element.classList.add('shake-horizontal');
    }
  }

  // Toggles the CSS class for animation
  toggleAnimation = (isCorrect) => {
    console.log('isCorrect is: ', isCorrect);
    // If the guess is correct...
    if (isCorrect) {
      // Add animation
      this.addAnimation(true);
      // Wait a split second and then remove it
      setTimeout(this.removeAnimation, 500);
    }
    // If the guess is incorrect...
    if (!isCorrect) {
      // Add animation
      this.addAnimation(false);
      // Wait a split second and then remove it
      setTimeout(this.removeAnimation, 500);
    }
    
  }

  // Resets the game
  resetGame = (id) => {
    const tilez = this.state.tiles;
    for (let i = 0; i < tilez.length; i++) {
      tilez[i].clicked = false;
    }
    this.setState({score: 0})
  }

  // Click handler to set the clicked state to true.
  handleSaveClick = (id) => {
      // Variable to hold the tiles state.
      const tilez = this.state.tiles;
      // Search through character tiles to find the one that matches the clicked id.
      const tileClicked = tilez.filter(tile => tile.id === id);
      
    // If the tile isn't clicked...
    if (!tileClicked[0].clicked) {
      // ...set it to now be clicked
      tileClicked[0].clicked = true;
      // ...call this function to register the correct guess
      this.handleCorrectClick();
      // ...add the bouncy animation for correct guess
      this.toggleAnimation(true);

      // ... randomize character tiles
      tilez.sort((a, b) => {
				return 0.5 - Math.random();
			});

			this.setState({tilez});

    }
    else {
      this.handleIncorrectClick();
      this.toggleAnimation(false);
    }
  }

  /* If correct click, update the score, top score, and message in navbar.
  If the score reaches the max score of 12, display the "you win" message in the navbar.*/
  handleCorrectClick = () => {
    this.setState({isGuessCorrect: true});
    if (this.state.score+1 > this.state.topScore) {
      this.setState({topScore: this.state.topScore+1})
    }
    if (this.state.score+1 >= this.state.maxScore) {
      this.setState({score: this.state.score+1, message: "CONGRATS! YOU WIN!", messageClass:"correct"})
    } 
    else {
      this.setState({score: this.state.score+1, message: "YOU GUESSED CORRECTLY!", messageClass:"correct"})
    }
  }

  handleIncorrectClick = () => {
    this.setState({
      message: "INCORRECT. PLAY AGAIN?",
      isGuessCorrect: false
  });
    // this.toggleIncorrectAnimation();
    this.resetGame();
  }

  // Render the App component on the page
  render() {
    return (
      <div className="fluid-container lodge h-100vh">
        <Navbar
          className="row"
          score={this.state.score}
          topScore={this.state.topScore}
          message={this.state.message}
        />
        <Header className="bg-header row" />

        <div className="d-flex justify-content-center main-content mx-auto padding-main flex-wrap row">
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

        <Footer className="footer-mgn row" />
      </div>
    );
  }
}

export default App;
