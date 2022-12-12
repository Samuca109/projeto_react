import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import style from './footer.module.css'

function Footer(){
    return(
        <footer className={style.footer}>
            <ul className={style.ul}>
                <li className={style.li}><FaFacebook /></li>
                <li  className={style.li}><FaInstagram /></li>
                <li  className={style.li}><FaLinkedin /></li>
            </ul>
            <p>
                <span>Costs</span> &copy; 2022
            </p>
        </footer>
    )
}

export default Footer