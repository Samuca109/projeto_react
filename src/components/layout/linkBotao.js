import { Link } from 'react-router-dom'

function LinkBotao({ to, text }){
    return (
    <Link to={to}>
        {text}
    </Link>
    )
}

//As propriedades tem que ficar dentro de chaves

export default LinkBotao