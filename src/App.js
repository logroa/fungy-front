import React from 'react';
import './App.css';
import Closet from './components/Closet';

function App() {
  const coin = require('./assets/icons/pixal-coin.svg').default;
  const api_url = process.env.REACT_APP_BACKEND_URL.concat('/api/shirts/');

  return (
    <div className="App">
      <header className="App-header">
        <img src={coin} className="App-logo" alt="logo" />
        <h1>FungeMyTees.com</h1>
      </header>
      <Closet url={api_url} className='following'/>
    </div>
  );
}

export default App;
