import React from "react";
import './Auctions.css';

export default props => {
  return <p className="Auctions">Name: {props.auction.name} | AuctionId:{props.auction.auctionId} | Price:{props.auction.price} | Price cahnge:{ props.auction.priceChange}</p>
}
