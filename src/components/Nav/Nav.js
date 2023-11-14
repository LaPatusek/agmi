import { HambergerMenu } from 'iconsax-react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
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
          <Link to='/oferta' className={styles['nav-link']}>
            Oferta
          </Link>
          <Link
            to='/galeria'
            className={`${styles['nav-link']} ${styles['mid-link']}  
            }`}
          >
            Galeria
          </Link>
          <Link to='/kontakt' className={styles['nav-link']}>
            Kontakt
          </Link>

          <Link
            to='rekrutacja'
            className={`${styles['nav-link']} ${styles['last-link']}`}
          >
            Kariera
          </Link>
        </div>

        <div className={styles['navbar-900']}>
          <div className={styles['ham-menu']}>
            <HambergerMenu color='#f1f1f1' size={'36'}/>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Nav;
