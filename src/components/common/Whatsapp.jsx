import whatsLogo from '../../assets/icon/whatsapp.svg';

const Whatsapp = (props) => {
    return (
        <div className = 'whatsapp'>
            <a href = {`https://wa.me/send?phone=${props.num}`} target = '_blank' rel="noreferrer">
                <img src = {whatsLogo} alt = 'logo-whatsapp'/>
            </a>
        </div>
    );
}

export default Whatsapp;