import React, { Component } from "react";
import Auctions from "./components/Auctions/Auctions";

import "./App.css";
import AddAuction from "./components/AddAuction/AddAuction";

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

  addAuction = (event) => {
    console.log(event.type)
    const copy = { ...this.state };
    copy.auctions.push({
      name: "Smoczki",
      auctionId: event.target.value,
      price: 12.5,
      priceChange: 0.1
    });
    this.setState(copy);
  };

  renderAuctions = () => {
    return this.state.auctions.map((auction, index) => {
      return <Auctions auction={auction} key={index} />;
    });
  };

  changePrice = () => {
    const copy = { ...this.state };

    setTimeout(() => {
      copy.auctions[0].price = 13.5;
      this.setState(copy);
    }, 2000);
  };
  render() {
    return (
      <div className="App">
        <AddAuction addAuction={this.addAuction} />
        {this.renderAuctions()}
        {this.changePrice()}
      </div>
    );
  }
}

export default App;
