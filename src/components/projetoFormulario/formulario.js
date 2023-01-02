import { useState, userEffect } from 'react'

import Style from './formulario.module.css'
import Input from './input'
import Select from './select'
import Button from './button'

// Vou chamar por fora todos esses para poder ter menos linha de codigo e chama-los para ter um lugar especifico para poder altera-los

function Formulario({ buttonText }){
    const [categorias, setCategorias] = useState([])

    userEffect(() => {
        fetch("http://localhost:5000/categorias", {
            method: "GET", 
            headers: {
                'Content-Type': 'application/json'
            }
        })
        /**
         * Aqui vai acontecer a tranformaçao pro json para lancar ele la no json
         */
        .then((resp) => resp.json())
        .then((data) => {
            setCategorias(data)
        }) 
    .catch((err) => console.log(err))
}, [])

    return(
        <form className={Style.form}>
            <div>
            <Input type="text" text='Nome do projeto' name='name' placeholder=' nome do projeto' />
            </div>
           
            <div>
                <Input type="Number" text="Orçamento do Projeto" placeholder='digite o valor' />
            </div>
         
                <Select name="categoria_id"  text="Insira a categoria" options={categorias} />
      
        <div>
            <Button type='submit' text={buttonText} name='name' />
        </div>
        </form>
    )
}

export default Formulario

/**
 * Usar sempre o input padrao para criar textos e o placeholder para poder deixar o texto escrito como padrao, como se fosse no html
 * Sempre usar o value ao inves do text 
 */