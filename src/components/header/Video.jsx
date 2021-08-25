import videoHeader from '../../assets/videos/2222_lanzamiento.mp4';
import logo from '../../assets/images/2222_logo_rojo.png';

const Video = () => {
    return(
        <div className = 'header__video'>
            <video controls autoPlay>
                <source src = {videoHeader} type="video/mp4"/>
            </video>
            <div className = 'header__logo'>
                <img src = {logo} alt = 'logo-white'/>
            </div>
        </div>
    );
}
export default Video;