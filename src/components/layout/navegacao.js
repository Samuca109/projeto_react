import style from './navegacao.module.css'
import { Link } from 'react-router-dom'
import Logo from '../../img/costs_logo.png'

function Navegacao(){
    return(
     <nav>
        <Link>
              <img src={Logo} alt="Logo da foto" />
        </Link>
      <ul className={style.ul}>
        <li className={style.link}>
        <Link to="/home">Home</Link>
        </li>
        <li className={style.link}>
        <Link to="/empresa">Empresa</Link> 
        </li>
        <li className={style.link}>
        <Link to="/contato">Contato</Link>
        </li>
        <li className={style.link}>
          <Link to="projetos">
            Projetos
          </Link>
        </li>
      </ul> 
    </nav>
    )
}
/** codigo do novo projeto
 *   <li className={style.link}>
        <Link to="/novoprojeto">Novo Projeto</Link> 
        </li>
 */

export default Navegacao