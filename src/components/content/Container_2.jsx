import React from 'react';

import video from '../../assets/images/2222_icono_video.png';
import podcast from '../../assets/images/2222_icono_podcast.png';
import resources from '../../assets/images/2222_icono_recursos.png';
import gamification from '../../assets/images/2222_icono_gamificacion.png';
import community from '../../assets/images/2222_icono_comunidad.png';
import inversion from '../../assets/icon/inversion.svg'
import duracion from '../../assets/icon/duracion.svg'
import materiales from '../../assets/icon/materiales.svg'
import certificado from '../../assets/icon/certificado.svg'

const Container_2 = () => {
    return(
        <div className = 'content__container_2'>
            <h3>El 10% de los cupos estará abierto para docentes extranjeros</h3>
            <h2>Una aventura educativa multimedia expandida</h2>
            <div className = 'content__container_2--content'>
                <div className = 'content__container_2--media'>
                    <img src = {video} alt = 'video'/>
                    <h3>Videos</h3>
                </div>
                <div className = 'content__container_2--media'>
                    <img src = {podcast} alt = 'icon-fb'/>
                    <h3>Podcasts</h3>
                </div>
                <div className = 'content__container_2--media'>
                    <img src = {resources} alt = 'icon-fb'/>
                    <h3>Recursos</h3>
                </div>
                <div className = 'content__container_2--media'>
                    <img src = {gamification} alt = 'icon-fb'/>
                    <h3>Gamification</h3>
                </div>
                <div className = 'content__container_2--media'>
                    <img src = {community} alt = 'icon-fb'/>
                    <h3>Comunidad</h3>
                </div>
            </div>
            <div className = 'content__container_2--box'>
                <div className = 'content__container_2--about'>
                    <center>
                        <img src = {inversion} alt = 'icon-inversion' />
                    </center>
                    <p className = 'content__container_2--title'>Inversión</p>
                    <p>$ 75</p>
                </div>
                <div className = 'content__container_2--about'>
                    <center>
                        <img src = {duracion} alt = 'icon-duracion'/>
                    </center>
                    <p className = 'content__container_2--title'>Duración</p>
                    <p>35 días</p>
                </div>
                <div className = 'content__container_2--about'>
                    <center>
                        <img src = {materiales} alt = 'icon-materiales'/>
                    </center>
                    <p className = 'content__container_2--title'>Materiales</p>
                    <p>Durante el tiempo del curso tendrás disponible en nuestra plataforma todos los videos y materiales de trabajo</p>
                </div>
                <div className = 'content__container_2--about'>
                    <center>
                        <img src = {certificado} alt = 'icon-certificacion'/>
                    </center>
                    <p className = 'content__container_2--title'>Certificación</p>
                    <p>Diplomado avalado por la UTPL con una duración de 120 horas académicas</p>
                </div>
            </div>
        </div>
    );
}
export default  Container_2;