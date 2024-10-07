import Home from './components/views/Home.jsx';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/views/Login.jsx';
import GestaoUsuario from './components/views/GestaoUsuario.jsx';
import ImportCSV from './components/views/ImportCSV.jsx';
import CadastroAula from './components/views/CadastroAula.jsx';
import GestaoAulas from './components/views/GestaoAulas.jsx'
import EditAula from './components/views/EditAula.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/gestao_usuario' element={<GestaoUsuario/>}/>
        <Route path='/import_csv' element={<ImportCSV/>}/>
        <Route path='/cadastro_aula' element={<CadastroAula/>}/>
        <Route path='/gestao_aulas' element={<GestaoAulas/>}/>
        <Route path='/edit_aula/:id' element={<EditAula/>}/>
      </Routes>
    </Router>
  );
}

export default App;
