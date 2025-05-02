import React from 'react';

function Navbar() {
  return (
    <div style={{
      display: 'flex',
      gap: '20px',
      padding: '10px 20px',
      backgroundColor: 'black',
      color: 'white'
    }}>
      <span>NavBar</span>
      <span>Home</span>
      <span>Features</span>
      <span>Pricing</span>
    </div>
  );
}

export default Navbar;