import img from '../../assets/images/2222_ilustracion.png'; 

const Container_5 = () => {
    return(
        <div className = 'content__container_5'>
            <div className = 'content__container_5--content'>
                <h2>Un viaje a través de una narrativa multimedia expandida y tu proyecto personal</h2>
                <div className = 'content__container_5--content--text'>
                    <h3>El viaje 2222 te ofrece:</h3>
                    <p>un evento conferencia de bienvenida + 20 podcasts + 12 videos + 12 viñetas + un manual personalizado de trabajo Outliers School + 50 recursos recomendados + una comunidad propia en Clubhouse + gamificación de tu compromiso con el viaje + una maratón de cierre de 24 hs de proyectos de innovación docente + las semanas extras para los mejores 200 viajeros. </p>
                    <p><strong>Y lo más importante: la ideación ágil de tu proyecto personal de innovación docente.</strong></p>
                </div>
                <div className = 'content__container_5--content--img'>
                    <img src = {img} alt = 'ilustration'/>
                </div>
                <div className = 'content__container_5--content--text--box'>
                    <p>La carga horaria estimada para cada docente por ciudad es de 10 horas. Se trata de 4 horas para el consumo asíncrono de contenidos y 6 horas para el tiempo de producción y gamificación.</p>
                    <p><strong>Tiempo total del viaje 2222: </strong>120 hrs más las semanas extras para los 200 docentes más proactivos.</p>
                </div>
                <div className = 'content__container_5--content--btn'>
                    <a href = 'https://forms.office.com/r/HtS9GhfQ22'>Aprende a desaprender</a>
                </div>  
            </div>           
        </div>
    );
}
export default  Container_5;