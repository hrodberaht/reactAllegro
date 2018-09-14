import React, { Component } from "react";
import Auctions from "./components/Auctions/Auctions";

import "./App.css";

class App extends Component {
  state = {
    auctions: [
      {
        name: "Butelki",
        auctionId: "123456",
        price: 12.5,
        priceChange: 0.1
      },
      {
        name: "Piłki",
        auctionId: "123456",
        price: 12.5,
        priceChange: 0.1
      },
      {
        name: "Smoczki",
        auctionId: "123456",
        price: 12.5,
        priceChange: 0.1
      }
    ]
  };

  renderAuctions = () => {
    return this.state.auctions.map((auction, index) => {
      return <Auctions auction={auction} key={index} />;
    });
  };

  changePrice = () => {
    const state = { ...this.state };

    setTimeout(()=> {
      state.auctions[0].price = 13.5;
      this.setState(state);
    },2000)
    
  };
  render() {
    return (
      <div className="App">
        {this.renderAuctions()}
        {this.changePrice()}
      </div>
    );
  }
}

export default App;
