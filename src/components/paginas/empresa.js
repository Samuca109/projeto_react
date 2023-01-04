import { useState } from "react"
function Empresa(){
    const [nome, novoNome] = useState()

    // aQUI É A FORMA DE ALTERAR CLICANDO NO Botao
    const [alterar, novoalterar] = useState(`'PRIMEIRO NOME'`)
    const Novoalterar = () => {
        novoalterar(`<strong>'Novo nome colocado flamengo' </strong> `)
    }

    //Aqui vou esyar alterando o numero de dois e dois adicionando
    const [numero, novoNumero] = useState(5)
    const numeroAdicionado = () => {
        novoNumero(numero + 2)
    }

    return(
        <div>
            <h1>Minha empresa é {nome}</h1>
            <input type='text' value={nome} onChange={(e) => novoNome(e.target.value)} />
        <h1>{novoNome}</h1>
            <br></br>
            <hr></hr>
            <br></br>
            <h4>Para adicionar  o nome atraves dp click para outro é {alterar}</h4>  
            <button onClick={Novoalterar} >Alterar o nome</button>
            <br></br>
            <hr></hr>
            <br></br>
            <h4>
                Novo numero {numero}
            </h4>
            <button onClick={numeroAdicionado}>
                Adicionar numero
            </button>
        </div>
    )
}
export default Empresa