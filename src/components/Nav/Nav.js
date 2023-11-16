import { HambergerMenu } from 'iconsax-react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import styles from './Nav.module.css';

const Nav = () => {
  const [menuState, setMenuState] = useState(false);
  const menuRef = useRef(null);
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  const forthRef = useRef(null);
  const fifthRef = useRef(null);
  const sixthRef = useRef(null);

  const menuHandler = () => {
    setMenuState((s) => !s);
  };

  useEffect(() => {
    if (menuState) {
      document.body.style.overflowY = 'hidden';

      const menuRefCurr = menuRef.current;
      const firstRefCurr = firstRef.current;
      const secondRefCurr = secondRef.current;
      const thirdRefCurr = thirdRef.current;
      const forthRefCurr = forthRef.current;
      const fifthRefCurr = fifthRef.current;
      const sixthRefCurr = sixthRef.current;

      setTimeout(() => {
        menuRefCurr?.classList.toggle(styles['active-menu-900']);

        firstRefCurr?.classList.toggle(styles['visible-menu-item-900']);
        secondRefCurr?.classList.toggle(styles['visible-menu-item-900']);
        thirdRefCurr?.classList.toggle(styles['visible-menu-item-900']);
        forthRefCurr?.classList.toggle(styles['visible-menu-item-900']);
        fifthRefCurr?.classList.toggle(styles['visible-menu-item-900']);
        sixthRefCurr?.classList.toggle(styles['visible-menu-item-900']);
      }, 200);
    }
    if (!menuState) {
      document.body.style.overflowY = 'scroll';
    }
  }, [menuState]);

  return (
    <div className={`${styles.nav} grid`}>
      <div className={styles.logo}>
        <Link to='/' aria-label='Strona Główna'>
          <img src={logo} alt='' height={'90px'} width={'250px'} />
        </Link>
      </div>

      <div className={`${styles.navbar} grid`}>
        <Link to='/oferta' className={styles['nav-link']}>
          Oferta
        </Link>
        <Link
          to='/galeria'
          className={`${styles['nav-link']} ${styles['mid-link']} relative 
            }`}
        >
          Galeria
        </Link>
        <Link to='/kontakt' className={styles['nav-link']}>
          Kontakt
        </Link>

        <Link
          to='rekrutacja'
          className={`${styles['nav-link']} ${styles['last-link']} relative`}
        >
          Kariera
        </Link>
      </div>

      <div className={styles['navbar-900']}>
        <div className={styles['ham-menu']}>
          <HambergerMenu color='#f1f1f1' size={'36'} onClick={menuHandler} />
        </div>
        {menuState && (
          <div className={styles.overlay} onClick={menuHandler}>
            <div
              className={`${styles['navbar-menu-900']} center`}
              ref={menuRef}
            >
              <Link to='/' className={styles['menu-item-900']} ref={firstRef}>
                <span>
                  Strona <br /> główna
                </span>
              </Link>

              <Link
                to='/oferta'
                className={styles['menu-item-900']}
                ref={secondRef}
              >
                <span>Oferta</span>
              </Link>

              <Link
                to='/galeria'
                className={styles['menu-item-900']}
                ref={thirdRef}
              >
                <span>Galeria</span>
              </Link>

              <Link
                to='/kontakt'
                className={styles['menu-item-900']}
                ref={forthRef}
              >
                <span>Kontakt</span>
              </Link>

              <Link
                to='/rekrutacja'
                className={styles['menu-item-900']}
                ref={sixthRef}
              >
                <span>Kariera</span>
              </Link>

              <div className={styles['menu-item-900']} ref={fifthRef}>
                <span>Zamknij</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
