import React from 'react';

import logo from 'images/piquedlogoinvert.png';
import hurtslikehell from 'images/hurtslikehell.PNG';

export default () => {
  return (
    <div>
      <div className="main">
        <div class="hero-image"></div>
      </div>
      <div className="gridwrapper">
        <header><img src={logo} alt="Logo" style={{height: '10em'}} /></header>
        <main><p>alt-rock band from Worcester, MA</p></main>
        <iframe title="hindsight-video" width="560" height="315" src="https://www.youtube.com/embed/N4vxFNQSsaQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <section className="asideone"><p>"Hindsight" official video out now!<br />
        "Hindsight" - Piqued, video recorded on our Winter 2019 Tour<br /><br />
        Filmed by Piqued and Ada Juarez<br />
        Edited by Lilo Churchill</p></section>
        <section className="asidetwo"><p>"Hurts Like Hell" EP streaming now! ----> </p></section>
        <section className="asidethree"><a href="https://open.spotify.com/artist/5cEY65Q6ZxL5vQKaKl7sXR" className="imglink"><img src={hurtslikehell} alt="Hurts Like Hell" style={{height: '20em'}} /></a></section>
      </div>
    </div>
  )
}