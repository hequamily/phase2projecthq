import React, { useState } from "react";

function Nft({ data, handleAddToCart }) {
  const [isSold, setIsSold] = useState(false);

  const handleSoldClick = () => {
    setIsSold(true);
  };

  return (


    
    <div className="nft-card">
      <div className="nft-details">
        <img src={data.image} alt={data.name} style={{ width: "200px", height: "200px" }} />
        <h3>{data.name}</h3>
        <p>Artist: {data.artist}</p>
        <p>Price: {data.price}</p>

        {!isSold ? (
          <button onClick={() => {
            handleAddToCart(data);
            handleSoldClick();
          }}>Add to Cart</button>
        ) : (
          <button disabled>Sold</button>
        )}
      </div>
      <div className="search-bar"></div>
    </div>
  );
}

export default Nft;
