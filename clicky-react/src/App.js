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
    tiles
  }

  render() {
    return (
      <div className="fluid-container">
        <Navbar />
        <Header />
        <div className="d-flex justify-content-center">
          {this.state.tiles.map(tile =>  
          <Card 
            key={tile.id}
            name={tile.name}
            image={tile.image}
            clicked={tile.clicked}
          />)
          }
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
