import LinkBotao from '../layout/linkBotao'
import Style from './home.module.css'
import Img from '../../img/imagemDolar.svg'

function Home(){
    return(
       <section>
        <h1>Bem vindo ao <span>Costs</span></h1>
        <h5>Comece com os seus projetos agora mesmo</h5>
        <LinkBotao to="/novoProjeto"  text="Crie o seu Projeto" />
        <img src={Img} alt='Imagem dolar' />
       </section>
    )
}
export default Home