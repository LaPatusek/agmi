import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Bez nazwy.webp';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <Fragment>
      <div className={`${styles.nav} grid`}>
        <div className={styles.logo}>
          <Link to='/'>
            <img src={logo} alt='' height={'150px'} width={'402.5px'} />
          </Link>
        </div>

        <div className={`${styles.navbar} grid`}>
          <Link to='/uslugi' className={styles['nav-link']}>
            Usługi
          </Link>
          <Link to='/galeria' className={`${styles['nav-link']} ${styles['mid-link']}`}>
            Galeria
          </Link>
          <Link to='/kontakt' className={styles['nav-link']}>
            Kontakt
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Nav;
