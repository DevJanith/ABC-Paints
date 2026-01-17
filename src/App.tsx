import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

import About from './pages/About';
import Products from './pages/Products';
import PaintsColors from './pages/PaintsColors';
import Services from './pages/Services';
import CalculatorPage from './pages/CalculatorPage';
import Contractors from './pages/Contractors';
import Locations from './pages/Locations';
import Contact from './pages/Contact';

import Sellers from './pages/Sellers';

import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="paints" element={<PaintsColors />} />
            <Route path="services" element={<Services />} />
            <Route path="calculator" element={<CalculatorPage />} />
            <Route path="contractors" element={<Contractors />} />
            <Route path="locations" element={<Locations />} />
            <Route path="sellers" element={<Sellers />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
