import React, { useState } from "react";

function Search({ data }) {
  const [searchArtist, setSearchArtist] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const results = data.filter((item) =>
      item.artist.toLowerCase().includes(searchArtist.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleInputChange = (e) => {
    setSearchArtist(e.target.value);
  };

  return (
    <div>
      <div className="topnav">
        <input
          type="text"
          placeholder="Search Artist.."
          value={searchArtist}
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="nft-card">
        <div className="nft-details">
          {searchResults.length > 0 ? (
            searchResults.map((result) => (
              <div key={result.id}>
                <img
                  src={result.image}
                  alt={result.name}
                  style={{ width: "200px", height: "200px" }}
                />
                <h3>{result.name}</h3>
                <p>Artist: {result.artist}</p>
                <p>Price: {result.price}</p>
              </div>
            ))
          ) : (
            data.map((item) => (
              <div key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "200px", height: "200px" }}
                />
                <h3>{item.name}</h3>
                <p>Artist: {item.artist}</p>
                <p>Price: {item.price}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;