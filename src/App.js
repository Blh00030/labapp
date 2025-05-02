import logo from './logo.svg';
import './App.css';
import Navbar from './NavBar';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>CS 330L</h1>
      <h2>Section - 11</h2>
      <p>WVU ID: 800424376</p>
      <p>Hi I am Bryson Herron</p>
      <div className="d-flex flex-wrap justify-content-center gap-5">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
