import React, { Component } from 'react';
import logo from '../logo.svg';
import Ferguso from '../ferguso.jpg';

class Header extends Component {
  render() {
    const Hello =  <code>./Components/Header.jsx</code>;
    return (
        <header className="App-header">
            <p>reactjs dan redux itu mudah.</p>
            <img src={Ferguso} alt="Meme Ferguso" />
        </header>
    );
  }
}

export default Header;
