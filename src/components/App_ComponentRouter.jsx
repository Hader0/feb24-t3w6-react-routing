import {BrowserRouter, Route,Routes} from 'react-router-dom';
import '../styles/App.css';
import HomePage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';
import AboutPage from '../pages/AboutPage';
import Navbar from './Navbar';
import ProjectLayout from '../pages/_templates/ProjectLayout';
import PokemonProject from '../pages/projects/PokemonProject';

function App() {
  return (

    <div className="App">

      <BrowserRouter>

        {/* This is the custom Navbar */}
        <Navbar />

        <Routes>
          <Route path='/' element={ <HomePage />} />
          <Route path='/about' element={ <AboutPage />} />
          <Route path='/contact' element={ <ContactPage />} />

          <Route path="/projects" element={<ProjectLayout />}>
            <Route path="/projects/pokemon" element={<PokemonProject />} />
          </Route>

        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;
