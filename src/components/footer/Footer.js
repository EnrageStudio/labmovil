import React, {useState} from 'react';
import facebook from '../../assets/images/2222_icono_facebook.png';
import instagram from '../../assets/images/2222_icono_instagram.png';
import twitter from '../../assets/images/2222_icono_twitter.png';


function Footer() {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit= (evt) => {
    evt.preventDefault();
    
        var xhr = new XMLHttpRequest();
        var url = 'https://api.hsforms.com/submissions/v3/integration/submit/3056987/31579d0b-50f3-4e9c-8f81-2cb1276512c5'
        var data = {
            "fields": [
                {
                    "name": "email",
                    "value": email
                },
                {
                    "name": "firstname",
                    "value": name
                },
                {
                  "name": "lastname",
                  "value": lastname
              }
            ],
          }
          var final_data = JSON.stringify(data)
          
          xhr.open('POST', url);
          // Sets the value of the 'Content-Type' HTTP request headers to 'application/json'
          xhr.setRequestHeader('Content-Type', 'application/json');
          xhr.onreadystatechange = function () {
              if (xhr.readyState === 4 && xhr.status === 200) {
                  alert("Gracias por suscribirte al Newsletter"); // Returns a 200 response if the submission is successful.
              } else if (xhr.readyState === 4 && xhr.status === 403) {
                  alert(xhr.responseText); // Returns a 403 error if the portal isn't allowed to post submissions.     
              } else if (xhr.readyState === 4 && xhr.status === 404) {
                  alert(xhr.responseText); //Returns a 404 error if the formGuid isn't found    
              }
          }
          xhr.send(final_data)
  }
    
    return (
      <div className = 'footer'>
        <div className = 'footer__content'>
          <form className = 'footer__content--form' onSubmit = {handleSubmit}>
          <h2>Suscríbete a nuestra <strong>Newsletter</strong></h2>
            <input type = 'text' placeholder = 'Nombre' value={name}
                    onChange={e => setName(e.target.value)}/>
            <input type = 'text' placeholder = 'Apellido' value={lastname}
                    onChange={e => setLastName(e.target.value)}/>
            <input type = 'text' placeholder = 'Email' value={email}
                    onChange={e => setEmail(e.target.value)}/> 
            
            <input type = 'submit' className = 'footer__content--form--btn' value = 'Enviar'/>
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
          </div>
        </div>  
      </div>
    );
  }
  
  export default Footer;
  