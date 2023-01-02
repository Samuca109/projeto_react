import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Link } from 'react-router-dom'
import Style from './linkBotao.module.css'

function LinkBotao({ path, text }){
    return (
       
    <Link className={Style.btn} path={path}>
        {text}
    </Link>
  
    )
}

//As propriedades tem que ficar dentro de chaves

export default LinkBotao