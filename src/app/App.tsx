import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import About from '../components/about/About';
import Experience from '../components/experience/Experience';
import Education from '../components/education/Education';
import Skills from '../components/skills/Skills';
import Contact from '../components/contact/Contact';
import PageTransition from '../components/transitions/PageTransition';
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <PageTransition>
          <Routes>
            <Route
              path='/'
              element={
                <Navigate
                  to='/about'
                  replace
                />
              }
            />
            <Route
              path='/about'
              element={<About />}
            />
            <Route
              path='/experiencie'
              element={<Experience />}
            />
            <Route
              path='/education'
              element={<Education />}
            />
            <Route
              path='/skills'
              element={<Skills />}
            />
            <Route
              path='/contact'
              element={<Contact />}
            />
          </Routes>
        </PageTransition>
      </div>
    </Router>
  );
}

export default App;
