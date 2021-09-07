import whatsLogo from '../../assets/icon/whatsapp.svg';

const Whatsapp = (props) => {
    return (
        <div className = 'whatsapp'>
            <a href = {`https://api.whatsapp.com/send?phone=${props.num}&text=${props.mensaje}`} target = '_blank' rel="noreferrer">
                <img src = {whatsLogo} alt = 'logo-whatsapp'/>
            </a>
        </div>
    );
}

export default Whatsapp;