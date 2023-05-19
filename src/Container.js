import React from "react";
import Nft from "./NFT";

function Container({ data, addToCart }) {
  const handleAddToCart = (nft) => {
    addToCart(nft);
  };

  return (
    <div id="toy-collection">
      {data.map((nft) => (
        <Nft key={nft.id} data={nft} handleAddToCart={handleAddToCart} />
      ))}
    </div>
  );
}

export default Container;
