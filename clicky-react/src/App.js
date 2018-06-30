// This actually imports the React node modules
import React, { Component } from 'react';
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import './App.css';
import tiles from "./tiles.json";

class App extends Component {
  render() {
    return (
      <div className="fluid-container">
        <Navbar />
        <Header />
        <Content />
        {tiles.map(tile =>  
        <Card 
          key={tile.id}
          name={tile.name}
          image={tile.image}
        />)
        }
        <Footer />
      </div>
    );
  }
}

export default App;
