import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Projects from './pages/Projects';
import GetAQuote from './pages/GetAQuote';

import TestProject from '././pages/projects-pages/testproject';
import TestProjectTwo from '././pages/projects-pages/testprojecttwo';

function App() {
  return (
    <Router>
      {/* Full page layout wrapper */}
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />

            <Route path="/projects/testproject" element={<TestProject/>}/>
            <Route path="/projects/testprojecttwo" element={<TestProjectTwo/>}/>

            <Route path="/products" element={<Products />} />
            <Route path="/getaquote" element={<GetAQuote/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
