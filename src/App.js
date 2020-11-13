import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

// Pages
import Home from './pages/home';
import Skills from './pages/skills';
import Contact from './pages/contact';

function App() {
  return (
    <div className="h-screen">
      <Router>
        <header>
          <div className="container mx-auto">
            <ul className="grid grid-cols-3 uppercase text-gray-500 text-center text-xl">
              <li className="p-5 transition-all duration-500 transform hover:shadow-xl hover:text-black">
                <Link to="/" className="block w-full h-full">Home</Link>
              </li>
              <li className="p-5 transition-all duration-500 transform hover:shadow-xl hover:text-black">
                <Link to="/skills" className="block w-full h-full">Skills</Link>
              </li>
              <li className="p-5 transition-all duration-500 transform hover:shadow-xl hover:text-black">
                <Link to="/contact" className="block w-full h-full">Contact</Link>
              </li>
            </ul>
          </div>
        </header>
        <main className="container mx-auto px-5 py-20">
          <Switch>
            <Route path="/skills">
              <Skills />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
