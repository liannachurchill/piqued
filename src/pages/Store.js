import React from 'react';

import merch1 from 'images/merch1.jpg';
import merch2 from 'images/merch2.jpg';
import merch3 from 'images/merch3.jpg';
import merch4 from 'images/merch4.jpg';

export default () => {
  return (
    <div>
      <br /><br /><br />
      <h1>Store</h1>
      <br />
      <div class="store">
        <p>Email <a href="mailto:contact@piqued.band">contact@piqued.band</a> for any purchase inquiries.</p>
      </div>
      <div class="merch">
        <figure><img src={merch4} alt="Piqued Black Logo T-Shirt" />
        <figcaption>Piqued Black Logo T-Shirt<br />$10.00</figcaption></figure>
        <figure><img src={merch1} alt="Hurts Like Hell CD" />
        <figcaption>"Hurts Like Hell" EP CD<br />$5.00</figcaption></figure>
        <figure><img src={merch2} alt="Piqued Button Pin" />
        <figcaption>Piqued Logo Button Pin<br />$1.00</figcaption></figure>
        <figure><img src={merch3} alt="Piqued Sticker" />
        <figcaption>Piqued Logo Sticker<br />Free with purchase!</figcaption></figure>
      </div>
      <br /><br />
      <br /><br />
    </div>
  )
}