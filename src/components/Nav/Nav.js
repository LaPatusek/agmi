import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Bez nazwy.webp';
import styles from './Nav.module.css';

const Nav = () => {
  const [blackNav, setBlackNav] = useState(false);

  const menuColorHandler = () => {
    setBlackNav((s) => !s);
  };

  return (
    <Fragment>
      <div className={`${styles.nav} ${blackNav ? styles.black : ''} grid`}>
        <div className={styles.logo}>
          <Link to='/'>
            <img src={logo} alt='' height={'150px'} width={'402.5px'} />
          </Link>
        </div>

        <div className={`${styles.navbar} grid`}>
          <Link
            to='/oferta'
            className={`${styles['nav-link']} ${
              blackNav ? styles['black-link'] : ''
            }`}
          >
            Oferta
          </Link>
          <Link
            to='/galeria'
            className={`${styles['nav-link']} ${styles['mid-link']}  ${
              blackNav ? styles['black-link'] : ''
            }`}
          >
            Galeria
          </Link>
          <Link
            to='/kontakt'
            className={`${styles['nav-link']}  ${
              blackNav ? styles['black-link'] : ''
            }`}
          >
            Kontakt
          </Link>

          <div onClick={menuColorHandler}>Zmień kolor menu</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Nav;
