import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './component/Home'
import ErrorPage from './component/ErrorPage';
import Dashboard from './component/Dashboard';
import About from './component/About';

function App() {
  return (
   <Router>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/dashboard' element={<Dashboard />} />

          <Route path='*' element ={<ErrorPage />} />

        </Routes>
   </Router>
  );
}

export default App;
