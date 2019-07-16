import React from 'react';

import live1 from 'images/live1.jpg';
import live2 from 'images/live2.JPG';
import live3 from 'images/live3.JPG';
import live4 from 'images/live4.JPG';
import live5 from 'images/live5.JPG';
import live6 from 'images/live6.JPG';
import live7 from 'images/live7.JPG';
import live8 from 'images/live8.JPG';
import live9 from 'images/live9.JPG';
import live10 from 'images/live10.JPG';
import live11 from 'images/live11.JPG';
import live12 from 'images/live12.JPG';
import live13 from 'images/live13.JPG';
import live14 from 'images/live14.JPG';
import live15 from 'images/live15.JPG';

export default () => {
  return (
    <div>
      <br /><br /><br />
      <h1>Photos</h1>
      <br />
      <div class="row">
        <div class="column">
          <img src={live9} alt="Piqued at Shelter Arcade" />
          <img src={live11} alt="Piqued at Shelter Arcade" />
          <img src={live12} alt="Piqued at the Mole Hole" />
          <img src={live4} alt="Piqued at Starlite" />
          <img src={live3} alt="Piqued at The Tip" />
        </div>
        <div class="column">
          <img src={live10} alt="Piqued at Shelter Arcade" />
          <img src={live15} alt="Piqued at Remedy Music" />
          <img src={live14} alt="Piqued at the Mole Hole" />
          <img src={live2} alt="Piqued at The Tip" />
          <img src={live6} alt="Piqued at Remedy Music" />
        </div>
        <div class="column">
          <img src={live1} alt="Piqued in Woburn" />
          <img src={live5} alt="Piqued at Remedy Music" />
          <img src={live8} alt="Piqued in Rochester" />
          <img src={live7} alt="Piqued at Remedy Music" />
          <img src={live13} alt="Piqued at the Mole Hole" />
        </div>
      </div>
    </div>
  )
}