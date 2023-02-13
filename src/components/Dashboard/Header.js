import React from "react";
import HarryPotterImage from "../LOGO2.jpg";
const Header = ({ setIsAdding, setIsAuthenticated }) => {
  return (
    <header>
      <img
        src={HarryPotterImage}
        alt="harry potter"
        style={{ width: "100%" }}
      />
      <div style={{ marginTop: "30px", marginBottom: "18px" }}>
        <button onClick={() => setIsAdding(true)}>Add</button>
      </div>
    </header>
  );
};

export default Header;
