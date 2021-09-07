import phone from '../../assets/images/2222_phone_mockup.png';
import moment_1 from '../../assets/images/2222_icono_numero1.png';
import moment_2 from '../../assets/images/2222_icono_numero2.png';
import moment_3 from '../../assets/images/2222_icono_numero3.png';
import moment_4 from '../../assets/images/2222_icono_numero4.png';
import reward from '../../assets/images/2222_icono_premio.png';

const Container_3 = () => {
    return(
        <div className = 'content__container_3'>
            <div className = 'content__container_3--moment'>
                <h2>2000 + 200 + 20 + 2 = 2222</h2>
                <h3>2222 está basado en cuatro momentos consecutivos:</h3>
                <div className = 'content__container_3--block'>
                    <div className = 'content__container_3--phone'>
                        <img src = {phone} alt = 'icon-fb'/>
                    </div>
                    <div className = 'content__container_3__content'>
                        <div className = 'content__container_3__content__steps'>
                            <div className = 'content__container_3__content--steps'>
                                <img src = {moment_1} alt = 'icon-n1'/>
                                <p>La creación de una comunidad de <strong>2000 docentes</strong> de educación básica a través de una app que propondrá rutas de auto-aprendizaje y resolución de retos gamificados; </p>
                            </div>
                            <div className = 'content__container_3__content--steps '>
                                <img src = {moment_2} alt = 'icon-fb'/>
                                <p>El fomento y seguimiento de <strong>200 retos individuales</strong> de innovación docente;</p>
                            </div>
                            <div className = 'content__container_3__content--steps'>
                                <img src = {moment_3} alt = 'icon-fb'/>
                                <p>La incubación de <strong>20 proyectos</strong> de innovación de la práctica docente.</p>
                            </div>
                            <div className = 'content__container_3__content--steps'>
                                <img src = {moment_4} alt = 'icon-fb'/>
                                <p>La incubación y premiación de <strong>2 proyectos</strong> finales.</p>
                            </div>
                            </div>
                            <div className = 'content__container_3__content__join'>
                                <div className = 'content__container_3__content__join--reward'>
                                <img src = {reward} alt = 'icon-fb'/>
                                <p>Pagas por un viaje de 35 días, pero -si eres uno de los mejores 200 viajeros- puedes recibir un bonus por varias semanas más para mejorar y recibir mentorización sobre tu proyecto personal de innovación docente. </p>
                            </div>
                            <div className = 'content__container_3__content__join--btn'>
                                <a href = 'https://bit.ly/3mEVFV5'>EMBÁRCATE EN ESTA AVENTURA</a>
                            </div>                       
                        </div>                    
                    </div>
                </div>
            </div>  
        </div>
    );
}
export default  Container_3;