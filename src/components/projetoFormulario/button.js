import Style from './button.module.css'

function Button({ text, type, name, value}){
    return(
        <div >
            <button className={Style.button} type={type} name={name} value={value}>
                {text}
            </button>
        </div>
    )
}

//Sempre lembrando do retorno do que sera mostrado, tudo sera feito de forma dinamica e sera alterado de acordo com o que for mudado no arquivo 
export default Button