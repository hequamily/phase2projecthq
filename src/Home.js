import React from "react";

function Home() {
  return (
    <div style={{ color: "firebrick" }}>
      <h1>MoonBeach</h1>
      <div className="container">
        <label>:</label>
        <input type="text" placeholder="Enter Username" name="username" required />
        <label>:</label>
        <input type="password" placeholder="Enter Password" name="password" required />
        <button type="submit">Login</button>
      
      </div>
      <p>TRADE</p>
      <p>SELL</p>
      <p>COLLECT</p>
      <p></p>
      <p>Live</p>
    </div>
  );
}

export default Home;
