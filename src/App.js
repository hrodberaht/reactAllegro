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

  renderAuctions = this.state.auctions.map((auction, index) => {
    return <Auctions auction={auction} key={index} />;
  });

  render() {
    return (
      <div className="App">
        <AddAuction addAuction={this.addAuction} />
        {this.renderAuctions}
      </div>
    );
  }
}

export default App;
