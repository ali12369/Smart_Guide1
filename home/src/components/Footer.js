import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import img from '../images/deltawebit.png' ; 

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure  to receive our best destinations deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
       
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>comment ça fonctionne ?</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contacter nous</h2>
            <Link to='../pages/contactus.js'>Contact</Link>
            
          </div>
        </div>
        <div className='footer-link-wrapper'>
          
          <div class='footer-link-items'>
            <h2>Reseaux socia</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            <img src={img} alt="error" id='logo' />
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>Delta web it 2023</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;