import React, {useState, useEffect} from 'react';
import facebook from '../../assets/images/2222_icono_facebook.png';
import instagram from '../../assets/images/2222_icono_instagram.png';
import twitter from '../../assets/images/2222_icono_twitter.png';

function Footer() {
    // useEffect(() =>{
    //   componentDidMount();
    // }, []);
    const componentDidMount = () => {
      const script = document.createElement('script');
      script.src = 'https://js.hsforms.net/forms/v2.js';
      document.body.appendChild(script);
      script.addEventListener('load', () => {
        if(window.hbspt) {
          window.hbspt.forms.create({
            portalId: '3056987',
            formId: '31579d0b-50f3-4e9c-8f81-2cb1276512c5'
          })
        }
      });
    }
    return (
      <div className = 'footer'>
        <div className = 'footer__content'>
          <form className = 'footer__content--form'>
            <h2>Suscríbete a nuestra <strong>Newsletter</strong></h2>
            <input placeholder = 'Nombre'/>
            <input placeholder = 'Email'/>
            <input type = 'button' className = 'footer__content--form--btn' value = 'Enviar'/>
          </form>
          <div className = 'footer__content--social'>
            <h2>Síguenos en nuestras <strong>redes sociales</strong></h2>
            <div className = 'footer__content--social-network--fb'>
              <a href = 'https://www.facebook.com/Labmovil2222-102665032134520/about?ref=page_internal'><img src = {facebook} alt = 'icon-fb'/></a>
            </div>
            <div className = 'footer__content--social-network--insta'>
              <a href = 'https://www.instagram.com/labmovil2222/'><img src = {instagram} alt = 'icon-insta'/></a>
              
            </div>
            <div className = 'footer__content--social-network--twitter'>
              <a href = 'https://twitter.com/labmovil2222'><img src = {twitter} alt = 'icon-twiter'/></a>
            </div>
            <div id = 'hubspotForm'>

            </div>
          </div>
        </div>  
      </div>
    );
  }
  
  export default Footer;
  