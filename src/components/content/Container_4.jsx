import video from '../../assets/videos/1626713162084-00885.mp4'

const Container_4 = () => {
    return(
        <div className = 'content__container_4'>
            <h2>Mapeando el futuro de la educación</h2>
            <div className = 'content__container_4--content'>
                <div className = 'content__container_4--content--text'>
                    <p className = 'text-bold'>¿Cuál será tu reto individual de innovación docente? Somos un LabMóvil porque cuando regreses de este viaje, tendrás una solución para promover en tu escuela.</p>
                    <p>Además, este viaje se traduce en repensar las dinámicas tradicionales de la escuela y abrir espacios para reconfigurar y volver a conectar los diferentes ingredientes de la educación pero articulados de una manera distinta. Esta serán las temáticas que analizaremos en cada ciudad:</p>
                    <ul className = 'content__container_4--content--text--list'>
                        <li><strong>Sobre las competencias blandas docentes.</strong> Hacia un mentor diseñador de experiencias de aprendizaje.</li>
                        <li><strong>Enseñar y aprender contando historias.</strong> Creación de narrativas multimedia expandidas para una formación híbrida 7/24.</li>
                        <li><strong>Los esfuerzos de apropiación docente de las TIC.</strong>Cómo integrar las tecnologías educativas a la escuela.</li>
                        <li><strong>La evaluación, un camino de reflexión y cambio.</strong> Estrategias innovadoras para el aprendizaje.</li>
                        <li><strong>Los estudiantes al centro de toda innovación.</strong> Metodologías ágiles para repensar la escuela y la sociedad.</li>
                        <li><strong>Cómo ser socio de la gestión ministerial.</strong> Innovación, una oportunidad para la ejecución del currículo. </li>
                        <li><strong>Repensar el trabajo en equipo fomentando la integración de asignaturas.</strong> Rutas de personalización y flexibilidad.</li>
                        <li><strong>Entender las brechas</strong> que hacen imposible la gestión homogéneas de los estudiantes.</li>
                        <li><strong>Mejor información para escuelas más inteligentes.</strong> La analítica del aprendizaje. </li>
                        <li><strong>Estrategias de visibilidad profesional docente.</strong> Hacia diseño de redes significativas para posicionarse en el mercado de trabajo.Hacia diseño de redes significativas para posicionarse en el mercado de trabajo.</li>
                    </ul>
                </div>
                <div className = 'content__container_4--content--video'> 
                    <video controls>
                        <source src = {video} type = 'video/mp4'/>
                    </video>
                    <p className = 'text-bold'>Diana Rivera, xxxxxxxxx</p>
                </div>
            </div>
        </div>
    );
}
export default  Container_4;