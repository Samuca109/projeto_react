import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


//Navegaçao
import Home from './components/paginas/home';
import Contato from './components/paginas/contato';import Empresa from './components/paginas/empresa';
import NovoProjeto from './components/paginas/novoProjeto'
import './App.css';
import Navegacao from './components/layout/navegacao';
import Projeto from './components/paginas/projetos';

//Footer
import Footer from './components/layout/footer';
import Container from './components/layout/container';


// o Switch foi substituido pelo Routes

function App() {
  return (
        <Router>
        <Navegacao />
        <Routes>
          <Route path="home" element={<Home />}>
          </Route>
          <Route path="empresa" element={<Empresa />}>
          </Route>
          <Route path="contato" element={<Contato />}>
          </Route>
          <Route path="projetos" element={<Projeto />}>
          </Route>
        </Routes>
        <Footer />
       </Router>
  );
}

/*  Novo projeto que esta em comentario mas ja tem o arquivo dele * 
*<Route path="novoprojeto" element={<NovoProjeto />}>
  </Route>
 */
export default App;
