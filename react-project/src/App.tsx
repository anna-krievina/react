import React from 'react';
import logo from './logo.svg';
import './App.css';
import Images from './images/Images';
import Videos from './videos/Videos';

function App() {
  return (
      <div className="App">
          <div className="App-header">
              <Images />
              <Videos />
          </div>
          <footer>
              <span>Made by Anna Krieviņa </span>
              <a className="App-link"
                 href="https://github.com/anna-krievina/react"
                 target="_blank">
                  Project source on github
              </a>
          </footer>
      </div>
  );
}

export default App;
