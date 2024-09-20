import {BrowserRouter, Route,Routes} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (

    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <HomePage />} />
          <Route path='/about' element={ <AboutPage />} />
          <Route path='/contact' element={ <ContactPage />} />
        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;
