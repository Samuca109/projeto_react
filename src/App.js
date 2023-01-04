import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


//Navegaçao
import Home from './components/paginas/home';
import Contato from './components/paginas/contato';import Empresa from './components/paginas/empresa';
import NovoProjeto from './components/paginas/novoProjeto'
import './App.css';
import Navegacao from './components/layout/navegacao';
import Projeto from './components/paginas/projetos';
import Teste from './components/paginas/teste';

//Footer
import Footer from './components/layout/footer';
import Container from './components/layout/container';
import Img from './img/imagemDolar.svg'

// o Switch foi substituido pelo Routes

function App() {
  return (
        <Router>
        <Navegacao />
        <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route path="empresa" element={<Empresa />}>
          </Route>
          <Route path="contato" element={<Contato />}>
          </Route>
          <Route path="projetos" element={<Projeto />}>
          </Route>
          <Route path="novoprojeto" element={<NovoProjeto />}>
          </Route>
          <Route path='teste' element={<Teste />} />
        </Routes>
        <Footer />
       </Router>
     
  );
}
//O route sempre tem que estar no app.js tambem que é a pagina principal onde vai ser mostrado os arquivos.

export default App;
