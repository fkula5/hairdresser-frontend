import React from 'react';
import fb from './fb.png'
import ig from './ig.png'
import './styles.css'

function Footer() {
  return (
    <div className="footer">
      <div className='left-section'>
        <div className='address'>
        <div className='logom'>
          <h2>Cut&Book</h2>
          <p>62 Wincentego pola</p>
          <p>Rzeszów 35-300</p>
          <div className='social-icons'>
            <a href='https://www.facebook.com/'><img src={fb} alt='Facebook'/></a>
            <a href='https://www.instagram.com/'><img src={ig} alt='Instagram'/></a>
          </div>
          </div>
        </div>
      </div>
      <div className='right-section'>
        <div className='contact-info'>
          <h2>RESERVATION AND INFORMATION</h2>
          <p>+48 212 555 123</p>
          <h2>QUESTIONS AND SUGGESTIONS</h2>
          <p>info@cut&book.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
