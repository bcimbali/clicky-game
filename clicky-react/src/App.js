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
    topScore: 0,
    message: "Click an image to begin!"
  };

  handleSaveClick = (id) => {
    
    this.setState({clicked: true});
    console.log("Click Saved", id);
  }

  render() {
    return (
      <div className="fluid-container">
        <Navbar
          score={this.state.score}
          topScore={this.state.topScore}
          message={this.state.message}
        />
        <Header />
        <div className="d-flex justify-content-center">
          {this.state.tiles.map(tile =>  
          <Card 
            key={tile.id}
            id={tile.id}
            name={tile.name}
            image={tile.image}
            clicked={tile.clicked}
            clickHandler = {this.handleSaveClick}
          />)
          }
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
