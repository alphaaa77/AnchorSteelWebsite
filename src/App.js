import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Services from './pages/Services';
import Projects from './pages/Projects';
import GetAQuote from './pages/GetAQuote';

import Rebar from './pages/products-pages/Rebar';
import Mesh from './pages/products-pages/Mesh';
import Accessories from './pages/products-pages/Accessories';

import FrenchForest from './pages/projects-pages/frenchforest';
import BunningsTempe from './pages/projects-pages/bunningstempe';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />

            <Route path="/rebar" element={<Rebar/>}/>
            <Route path="/mesh" element={<Mesh/>}/>
            <Route path="/accessories" element={<Accessories/>}/>

            <Route path="/projects/frenchforest" element={<FrenchForest/>}/>
            <Route path="/projects/bunningstempe" element={<BunningsTempe/>}/>

            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services/>} />
            <Route path="/getaquote" element={<GetAQuote/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
