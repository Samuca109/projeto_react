import Style from './novoProjeto.module.css'
import Formulario from '../projetoFormulario/formulario'

function NovoProjeto(){
    return(
        <div className={Style.novoProjeto}>
            <h1>Criar Projeto</h1>
            <h4 className={Style.h4}>Crie seu primeiro projeto depois adicionar os serviços</h4>
            <Formulario buttonText="Criar projeto" />
        </div>
    )
}
export default NovoProjeto

/*
    * O  formulario foi criado ne um especifico para para evitar mais linhas de codigo por isso tem um arquivo so pra ele.

    * Sempre importar o estilo de fora.

    * Sempre usar o value ao inves do text nos inputs é bom criar varios arquivo e so importa-los para ficarem melhor de ser identificado.
 */