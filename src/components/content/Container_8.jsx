import logo_utpl from '../../assets/images/UTPL-INSTITUCIONAL-color.jpg';
import logo_outliers from '../../assets/images/logo_outliers_multi_transp.png';
import logo_catedra from '../../assets/images/thumbnail_logop catedra de innovacion copy.png';
import logo_binnarium from '../../assets/images/logo Binna.png'

const Container_8 = () => {
    return(
        <div className = 'content__container_8'>
            <div className = 'content__container_8--organizan'>
                <h2>Organizan:</h2>
                    <div className = 'organizan--icon'>
                        <img src = {logo_utpl} alt = 'logo_utpl' align="middle"/>
                    </div>
                    <div className = 'organizan--icon'>
                        <img src = {logo_outliers} alt = 'logo_outliers' align="center"/>
                    </div>
                    <div className = 'organizan--icon'>
                        <img src = {logo_binnarium} alt = 'logo_binnarium' align="center"/>
                    </div>
                    <div className = 'organizan--icon'>
                        <img src = {logo_catedra} alt = 'logo_catedra' align="center"/>
                    </div>
                </div>
        </div>
    );
}
export default  Container_8;