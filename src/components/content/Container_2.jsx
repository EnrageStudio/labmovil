import React from 'react';

import video from '../../assets/images/2222_icono_video.png';
import podcast from '../../assets/images/2222_icono_podcast.png';
import resources from '../../assets/images/2222_icono_recursos.png';
import gamification from '../../assets/images/2222_icono_gamificacion.png';
import community from '../../assets/images/2222_icono_comunidad.png';

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
        </div>
    );
}
export default  Container_2;