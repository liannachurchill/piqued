import React from 'react';

import aboutpromo from 'images/promo6.JPG';

export default () => {
  return (
    <div>
      <br /><br /><br />
      <h1>Piqued</h1>
      <br />
      <div className="topphoto">
        <img src={aboutpromo} alt="Piqued" />
      </div>
      <div className="about">
        <p>In a rural town outside of Central Massachusetts, three friends from the same high school came together to write music in early winter of 2017. From these initial sessions sprouted the first few ideas that would later become the first few songs of Piqued. Kyle, Chace, and Tim wrote songs for a three piece band. Before they knew it, they were writing rhythym guitar parts and later added Bobby on bass guitar. Although Chace was originally set to be the lead vocalist, the band explored the idea of a sole vocalist. After trying out a few people, the boys sent the songs to their friend Lilo, who was living in Paris, France at the time. She sent demo recordings then a month and a half later, when she returned to the States in May, Piqued had their official first practice as a full band. </p>
        <p>Piqued blends melodic riffs with post-hardcore chords. They've been compared to bands such as Tiger's Jaw, Foxing, Covet, and Paramore. Their first single "Veratrum" was released on July 13th and was quicckly featured on local radio playlists. While they fall into many genres, such as progressive-rock, math-rock, jazz-rock, and post-hardcore, they find the term alternative-rock to best fit their wide umbrella of sound.</p>
        <p>Piqued played their first show on July 28th, 2018 and released their first EP "Hurts Like Hell" later that summer, on August 25th. After hosting their EP release show, the band played shows around New England throughout the fall. They went on their first tour in the winter of 2019, a 12-day run down the east coast to Florida and back up through inland states. Since returning from tour, Piqued has continued playing shows around the Northeast. They are currently finishing their anticipated second EP, expected to be released in the Summer of 2019.</p>
      </div>
    </div>
  )
}