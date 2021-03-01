import logo from './logo.svg';
import React from 'react';
import './App.css';
import ButtonAppBar from './components/Nav';
import HotelBooking from './components/HotelBooking';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonAppBar />
        <HotelBooking/>
      </header>
    </div>
  );
}

export default App;
