import Style from './select.module.css'

function Select({ text, name, options, handleOnChange, value }){
   return( 
   <div >
        <label htmlFor={name}> {text}:</label>
        <br></br>
        <select  className={Style.select} name={name} id={name}>
            <option>
               Selecione uma opção
            </option>
            {options.map((option) => (
                <option value={option.id} key={option.id}>
                    {option.name}
                </option>
            ))}
        </select>
    </div>
    )
}
// O key deixa a option unica 
//Se nao tiver o return nao vai funcionar
export default Select