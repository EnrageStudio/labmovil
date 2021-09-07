import React, {useState} from 'react';

import Header from './header/Header';
import Content from './content/Content';
import Whatsapp from './common/Whatsapp';
import Footer from './footer/Footer';
import {Welcome} from './animation/Animations';

function App() {
  const [num] = useState("593939298410");
  const [mensaje] = useState("¡Hola! 👋🏻 Necesito información sobre LabMovil2222"); 
  return (
    <div>
      <Whatsapp num = {num} mensaje = {mensaje}/>
      <Welcome component= {
        <div>
          <Header/>
          <Content/>
          <Footer/>
        </div>
      }/>  
    </div>
  );
}

export default App;
