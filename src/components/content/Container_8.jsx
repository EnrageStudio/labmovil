import logo_utpl from '../../assets/images/UTPL-INSTITUCIONAL-color.jpg';
import logo_outliers from '../../assets/images/logo_outliers_multi_transp.png';
import logo_catedra from '../../assets/images/thumbnail_logop catedra de innovacion copy.png';

const Container_8 = () => {
    return(
        <div className = 'content__container_8'>
            <div className = 'content__container_8--organizan'>
                <h2>Organizan:</h2>
                    <a>
                        <img src = {logo_utpl} alt = 'logo_utpl'/>
                    </a>
                    <a>
                        <img src = {logo_outliers} alt = 'logo_outliers'/>
                    </a>
                    <a>
                        <img src = {logo_catedra} alt = 'logo_catedra'/>
                    </a>
                </div>
        </div>
    );
}
export default  Container_8;