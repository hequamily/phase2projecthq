import React from "react";

function Profile({ data, addNewNft }) {
  console.log(addNewNft);

  const handleAddNft = (e) => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const artist = e.target.elements.artist.value;
    const image = e.target.elements.image.value;
    const price = e.target.elements.price.value;

    const newNft = {
      id: Date.now(),
      name: name,
      artist: artist,
      image: image,
      price: price,
      added: true,
    };

    addNewNft(newNft);
    e.target.reset();
  };

  return (
    
    <div>
        {"ADD NFT"}
      <form onSubmit={handleAddNft}>
        <div className="form-row">
          <label htmlFor="name">:</label>
          <input type="text" id="name" name="name" placeholder="Title of the piece" />
        </div>

        <div className="form-row">
          <label htmlFor="artist">:</label>
          <input type="text" id="artist" name="artist" placeholder="Artist name" />
        </div>

        <div className="form-row">
          <label htmlFor="image">:</label>
          <input type="text" id="image" name="image" placeholder="Image URL" />
        </div>

        <div className="form-row">
          <label htmlFor="price">:</label>
          <input type="number" id="price" name="price" placeholder="Enter price" />
        </div>

        <button type="submit">Submit</button>
      </form>

      <h1>My Profile</h1>
      <h2>My NFTs: NONE</h2>

      <h2>Trending:</h2>
      {data.slice(0, 2).map((item) => (
        <div key={item.id}>
          {item.image && (
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "200px", height: "200px" }}
            />
          )}
          <p>{item.name}</p>
          <p>{item.artist}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Profile;
