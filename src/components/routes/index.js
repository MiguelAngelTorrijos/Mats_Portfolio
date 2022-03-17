import { Routes, Route } from 'react-router-dom';
import { About } from '../pages/About/About';
import { Contact } from '../pages/Contact/Contact';
import { Home } from '../pages/Home/Home';
import { Portfolio } from '../pages/Portfolio/Portfolio';
import { Skills } from '../pages/Skills/Skills';

const PublicRoutes = () => {
  return (
   
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='*' element={<Home />} />
      </Routes>
  
  );
};

export default PublicRoutes;
