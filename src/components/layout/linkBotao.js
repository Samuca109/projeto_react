import { Link } from 'react-router-dom'
import Style from './linkBotao.module.css'

function LinkBotao({ to, text }){
    return (
    <Link className={Style.btn} to={to}>
        {text}
    </Link>
    )
}

//As propriedades tem que ficar dentro de chaves

export default LinkBotao