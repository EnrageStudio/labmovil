import React from 'react';

import Header from './header/Header';
import Content from './content/Content';
import Footer from './footer/Footer';
import {Welcome} from './animation/Animations';

function App() {
  return (
    <Welcome component= {
      <div>
        <Header/>
        <Content/>
        <Footer/>
    </div>
    }/>  
  );
}

export default App;
