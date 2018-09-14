import React from "react";

export default props => {
  return <p>Name: {props.auction.name} | AuctionId:{props.auction.auctionId} | Price:{props.auction.price} | Price cahnge:{ props.auction.priceChange}</p>
}
