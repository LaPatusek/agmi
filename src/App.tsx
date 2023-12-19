import React, { Fragment, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Galeria from './Pages/Galeria.tsx';
import Kontakt from './Pages/Kontakt.tsx';
import Main from './Pages/Main.tsx';
import Rekrutacja from './Pages/Rekrutacja.tsx';
import Services from './Pages/Services.tsx';
import Artykul from './components/Blog/Artykul.tsx';
import SingleImage from './components/Elements/MansoryLayout/SingleImage.tsx';
import Footer from './components/Footer/Footer.tsx';
import Nav from './components/Nav/Nav.tsx';

const App: React.FC = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash === '') {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]);

  return (
    <Fragment>
      <nav>
        <Nav />
      </nav>

      <main>
        <Routes>
          <Route path='/main' element={<Main />} />
          <Route path='/galeria' element={<Galeria />} />
          <Route path='/galeria/:slug' element={<SingleImage />} />
          <Route path='/kontakt' element={<Kontakt />} />
          <Route path='/oferta' element={<Services />} />
          <Route path='/rekrutacja' element={<Rekrutacja />} />
          <Route path='/article/:slug' element={<Artykul />} />
          <Route path='*' element={<Main />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
};

export default App;
