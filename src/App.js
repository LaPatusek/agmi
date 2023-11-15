import { Fragment, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Galeria from './Pages/Galeria';
import Kontakt from './Pages/Kontakt';
import Main from './Pages/Main';
import Rekrutacja from './Pages/Rekrutacja';
import Services from './Pages/Services';
import Artykul from './components/Blog/Artykul';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';

function App() {
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
}

export default App;
