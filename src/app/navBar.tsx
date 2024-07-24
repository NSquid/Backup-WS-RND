import React from 'react';

const NavBar = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '40px',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000,
  };

  const logoStyle = {
    height: '35px',
    width: '120px',
  };

  const buttonStyle = {
    margin: '0 10px',
    fontFamily: 'Poppins, sans-serif',
  };

  return (
    
    <nav style={navStyle}>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" />
      <img src="/bnccLogo.png" alt="Logo" style={logoStyle} />
      <div>
        <button style={buttonStyle}>About Us</button>
        <button style={buttonStyle}>Projects</button>
        <button style={buttonStyle}>Events</button>
        <button style={buttonStyle}>Divisions</button>
        <button style={buttonStyle}>Contact</button>
      </div>
    </nav>
  );
};

export default NavBar;