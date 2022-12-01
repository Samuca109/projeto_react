import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import style from './footer.module.css'

function Footer(){
    return(
        <footer className={style.footer}>
            <ul>
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaLinkedin /></li>
            </ul>
            <p>
                <span>Costs</span> &copy; 2022
            </p>
        </footer>
    )
}

export default Footer