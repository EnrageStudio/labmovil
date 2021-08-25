import React from 'react';
import { Col, Row} from 'react-bootstrap';

import icon_mobile from '../../assets/images/2222_icono_movil.png';
import icon_route from '../../assets/images/2222_icono_viaje.png';
import icon_lab from '../../assets/images/2222_icono_laboratorio.png';

const Container_1 = () => {
    return(
        <div className = 'content__container_1'>
            <Row className = 'content__container_1--what'>
                <Col xs={4} className = 'content__container_1--what--img'>
                    <img src = {icon_mobile} alt = 'icon-fb'/>
                </Col>
                <Col xs={8} md={12}  className = 'content__container_1--what--text'>
                    <p><span>2222</span> es <strong>un soporte móvil teórico-práctico</strong> para contribuir con los docentes de educación básica y media del Ecuador en la mejora continua de su ejercicio académico cotidiano.</p>
                </Col>
            </Row>
            <Row className = 'content__container_1--what'>
                <Col xs={4} className = 'content__container_1--what--img'>
                    <img src = {icon_route} alt = 'icon-fb'/>
                </Col>
                <Col xs={8} md={12} className = 'content__container_1--what--text'> 
                    <p><span>2222</span> es <strong>un viaje fantástico de 35 días</strong> a través de una app por 12 ciudades de la historia de la humanidad y áreas temáticas. Se inicia el <strong>15 de noviembre</strong> desde nuestro origen en Quitu hacia la armonía y sabiduría de Shangri-La. El viajero de 2222 es un maestro que aprende de modo permanente. Inicias el viaje con un reto personal y lo finalizas con un proyecto de innovación docente para comenzar a ejecutar en tu escuela.</p>
                </Col>
            </Row>
            <Row className = 'content__container_1--what'>
                <Col xs={4} className = 'content__container_1--what--img'>
                    <img src = {icon_lab} alt = 'icon-fb'/>
                </Col>
                <Col xs={8} md={12} className = 'content__container_1--what--text'>
                    <p><span>2222</span> es <strong>un laboratorio vivo</strong> en el que se mezclan la resolución de problemas, con el autoaprendizaje, el trabajo en equipo, y con altas dosis de creatividad y motivación.</p>
                </Col>
            </Row>
        </div>
    );
}
export default  Container_1;