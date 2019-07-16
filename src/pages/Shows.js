import React from 'react';
import showspromo from 'images/promo5.JPG';

export default () => {
  return (
    <div>
      <br /><br /><br />
      <h1>Shows</h1>
      <br />
      <div class="topphoto"><img src={showspromo} alt="Piqued" /></div>
      <div class="shows">
        <p><span class="date">March 28th</span><span   class="location">Ralph's Rock Diner - Worcester, MA</span><a class="rsvp button" href="https://www.facebook.com/events/559558311198483/">RSVP</a></p>
        <p><span class="date">April 12th</span> Koto - Salem,  MA <a class="rsvp button" href="https://www.facebook.com/events/352743442216084/">RSVP</a></p>
        <p><span class="date">April 19th</span> Mixed Nuts Food Co-Op - Amherst, MA <a class="rsvp button" href="https://www.facebook.com/events/2223557911016139/">RSVP</a></p>
        <p><span class="date">April 25th</span> Patterson's Creations - Attleboro, MA <a class="rsvp button" href="https://www.facebook.com/events/2172296082816419/">RSVP</a></p>
        <p><span class="date">May 29th</span> Dusk - Providence, RI <a class="rsvp button" href="https://www.facebook.com/events/2274968176054124/">RSVP</a></p>
        <p><span class="date">June 28th</span> Alchemy - Providence, RI <a class="rsvp button" href="https://www.facebook.com/events/341004899861544/">RSVP</a></p>
      </div>
    </div>
  )
}