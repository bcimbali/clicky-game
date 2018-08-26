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
    message: "CLICK AN IMAGE TO BEGIN!"
  };

  // componentDidUpdate(prevState) {
  //   let element = document.getElementById("animate-this");
  //   element.classList.toggle('jello-vertical');
  // }

  // componentWillUpdate(prevState) {
  //   let element = document.getElementById("animate-this");
  //   element.classList.toggle('jello-vertical');
  // }

  // componentDidMount(prevState) {
  //   if (state.score != prevState.score) { 
  //   let element = document.getElementById("animate-this");
  //   element.classList.add('jello-vertical');
  //   }
  // }

  removeAnimation() {
    let element = document.getElementById("animate-this");
    element.classList.remove('jello-vertical');
    // alert('remove animation');
  }

  addAnimation() {
    let element = document.getElementById("animate-this");
    element.classList.add('jello-vertical');
  }

  toggleAnimation() {
    this.addAnimation();
    setTimeout(this.removeAnimation, 500);
  }

  resetGame = (id) => {
    const tilez = this.state.tiles;
    for (let i = 0; i < tilez.length; i++) {
      tilez[i].clicked = false;
    }
    this.setState({score: 0})
  }

  // Click handler to set the clicked state to true
  handleSaveClick = (id) => {
      this.toggleAnimation();
      const tilez = this.state.tiles;
      const tileClicked = tilez.filter(tile => tile.id === id);
      

    if (!tileClicked[0].clicked) {
      tileClicked[0].clicked = true;
      this.handleCorrectClick();

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
      this.setState({score: this.state.score+1, message: "CONGRATS! YOU WIN!", messageClass:"correct"})
    }else{
      this.setState({score: this.state.score+1, message: "YOU GUESSED CORRECTLY!", messageClass:"correct"})
    }
  }

  handleIncorrectClick = () => {
    this.setState({message: "INCORRECT. PLAY AGAIN?"})
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
