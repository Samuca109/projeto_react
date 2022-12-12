import Style from './input.module.css'

function Input({type, text, name, placeholder, handleOnChange, value}){
    return(
     <div>
        <label className={Style.textNome} htmlFor={name}>
            {text}:
        </label>    
        <br></br>
        <input className={Style.input}  type={type} name={name} id={name} placeholder={placeholder} onChange={handleOnChange}
        value={value}  />   
    </div>
    )
}
export default Input