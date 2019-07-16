import React, { useEffect } from 'react';
import { withRouter } from "react-router";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import 'App.css';

import logo from 'images/piquedlogoinvert.png';
import spotifylogo from 'images/spotifylogo.png';
import applemusiclogo from 'images/applemusiclogo.png';
import instagramlogo from 'images/instagramlogo.png';
import facebooklogo from 'images/facebooklogo.png';
import twitterlogo from 'images/twitterlogo.png';
import youtubelogo from 'images/youtubelogo.png';

import Index from 'pages/Index.js';
import About from 'pages/About.js';
import Shows from 'pages/Shows.js';
import Store from 'pages/Store.js';
import Photos from 'pages/Photos.js';

const NavBar = withRouter((props) => {
  return (
    <nav className="navbar">
      <Link to="/" style={{padding: '0.15em'}}><img src={logo} alt="Piqued" style={{height: '2.25em'}}></img></Link>
      <Link to="/about/">ABOUT</Link>
      <Link to="/shows/">SHOWS</Link>
      <div className="dropdown">
        <button className="dropbtn">MUSIC<i className="fa fa-caret-down"></i></button>
      <div className="dropdown-content">
        <a href="https://open.spotify.com/artist/5cEY65Q6ZxL5vQKaKl7sXR" target="_blank" rel="noopener noreferrer">SPOTIFY</a>
        <a href="https://itunes.apple.com/ca/artist/piqued/1433953644" target="_blank" rel="noopener noreferrer">APPLE MUSIC</a>
        <a href="https://piquedma.bandcamp.com/releases" target="_blank" rel="noopener noreferrer">BANDCAMP</a>
        <a href="https://www.youtube.com/watch?v=N4vxFNQSsaQ" target="_blank" rel="noopener noreferrer">YOUTUBE</a>
      </div>
      </div>
      <Link to="/store/">STORE</Link>
      <Link to="/photos/">PHOTOS</Link>
      <div className="dropdown">
        <button className="dropbtn">CONTACT
        <i className="fa fa-caret-down"></i>
        </button>
      <div className="dropdown-content">
        <a href="mailto:piquedmassachusetts@gmail.com" target="_blank" rel="noopener noreferrer">EMAIL</a>
        <a href="https://www.facebook.com/PiquedMA/" target="_blank" rel="noopener noreferrer">FACEBOOK</a>
        <a href="https://www.instagram.com/piquedma/" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
        <a href="https://twitter.com/piquedma" target="_blank" rel="noopener noreferrer">TWITTER</a>
      </div>
      </div>
    </nav>
  );
})

const ScrollToTop = withRouter(({ children, location: { pathname } }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
});

function App() {
  return (
    <Router><ScrollToTop>
    <div className="App">
      <header>
        <NavBar />
      </header>

      <div className="content">
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/about" component={About} />
        <Route path="/shows" component={Shows} />
        <Route path="/store" component={Store} />
        <Route path="/photos" component={Photos} />
      </Switch>
      </div>

      <footer>
        <ul id="menu">
          <li><a href="https://open.spotify.com/artist/5cEY65Q6ZxL5vQKaKl7sXR" className="logolink"><img src={spotifylogo} alt="Spotify" style={{height: '50px'}} /></a></li>
          <li><a href="https://itunes.apple.com/ca/artist/piqued/1433953644" className="logolink"><img src={applemusiclogo} alt="Apple Music" style={{height: '50px'}} /></a></li>
          <li><a href="https://www.facebook.com/PiquedMA/" className="logolink"><img src={facebooklogo} alt="Facebook" style={{height: '50px'}} /></a></li>
          <li><a href="https://www.instagram.com/piquedma/" className="logolink"><img src={instagramlogo} alt="Instagram" style={{height: '50px'}} /></a></li>
          <li><a href="https://twitter.com/PiquedMA" className="logolink"><img src={twitterlogo} alt="Twitter" style={{height: '50px'}} /></a></li>
          <li><a href="https://www.youtube.com/channel/UCxclwYNCFjKBHTmV2Rjg7FA" className="logolink"><img src={youtubelogo} alt="Youtube" style={{height: '50px'}} /></a></li>
        </ul>
      </footer>
    </div>
    </ScrollToTop></Router>
  );
}

export default App;
