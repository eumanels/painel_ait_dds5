import Home from './components/pages/Home.jsx';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/pages/Login.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
