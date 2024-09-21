import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css';
import HomePage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';
import AboutPage from '../pages/AboutPage';

// COnvert an array of objects into a <Routes> component containing <Route> components
const someFancyRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/about",
    element: <AboutPage />
  },
  {
    path: "/contact",
    element: <ContactPage />
  }
]);

function App() {
  return (

    <div className="App">

      <RouterProvider router={someFancyRouter} />

    </div>

  );
}

export default App;
