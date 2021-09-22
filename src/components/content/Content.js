import React, {useState} from 'react';

import Container1 from './Container_1';
import Container2 from './Container_2';
import Container2_1 from './Container_2_1';
import Container3 from './Container_3';
import Container4 from './Container_4';
import Container5 from './Container_5';
import Container6 from './Container_6';
import Container7 from './Container_7';
import Container8 from './Container_8';

function Content() {
    const [_url] = useState('https://srv-si-001.utpl.edu.ec/INSCRIPCION_NUEVOS_EC/enrollment/ew0KInBlcmlvZG8iOiAiMjAyMTEwIiwNCiJwcm9ncmFtYSI6ICJDQUVDX0UwIiwNCiJjYXJyZXJhIjogIlAyMjAiLA0KIm1hdGVyaWEiOiAiQ0FFQyIsDQoiY3Vyc28iOiAiMTI2OCIsDQoibm9tYnJlQ3Vyc28iOiAiUFJPWUVDVE8gMjIyMiIsDQoic29icmVwYXNhckN1cG9zIjogIk4iDQp9');
    return (
      <div className = 'content'>
          <Container1/>
          <Container2/>
          <Container2_1/>
          <Container3 url = {_url}/>
          <Container4/>
          <Container5 url = {_url}/>
          <Container6/>
          <Container7 url = {_url}/>
          <Container8/>
      </div>
    );
  }
  
  export default Content;
  