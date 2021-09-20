import logo from '../../assets/images/2222_logo_blanco.png';

const Container_7 = (props) => {
    return(
        <div className = 'content__container_7'>
            <div className = 'content__container_7--content'>
                <div className = 'content__container_7--content--logo'>
                    <img src = {logo} alt = 'logo-lab-white'/>
                </div>
                <div className = 'content__container_7--content--text'>
                    <p>El LabMóvil 2222 de la UTPL se traduce en repensar las dinámicas tradicionales de la escuela y abrir espacios para reconfigurar y reconectar los diferentes ingredientes de la educación. Y, a partir de este momento, ya no podremos dejar de ser parte de la comunidad 2222. ¡Este viaje nunca finalizará!</p>
                </div>    
                <div className = 'content__container_7--btn'>
                    <a href = {props.url}>Matricúlate aquí👆</a>
                </div>       
            </div>  
        </div>
    );
}
export default  Container_7;