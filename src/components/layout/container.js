import estilos from './container.module.css'

// Criar essa função é opcional e tambem nao esta funcionando da nova forma sem o switch 

// Tem que ver com funciona como a nova forma
function Container(props){
    return (
    <div className={`${estilos.container} ${props.custonClass}`}>
        {props.children}
    </div>
    )
     
    }
export default Container