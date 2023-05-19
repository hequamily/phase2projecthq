import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ onChangePage }) {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/nft">NFT</NavLink>
      <NavLink to="/search">Search</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </nav>
  );
}

export default NavBar;
