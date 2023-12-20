import { Call, Copyright, Location } from 'iconsax-react';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <hr />

      <div className={`${styles['boxes-wrap']} grid`}>
        <div className={styles['footer-box']}>
          <h3>Kontakt</h3>
          <div className={`${styles['box-content']} grid`}>
            <div className={`${styles.container} flex relative`}>
              <div className={styles['icon-container']}>
                <Location variant='Bold' color='#1a1a1a' />
              </div>
              <p>
                AGMI Transport <br /> ul hr. Wandy Tarnowskiej 1 <br /> 35-322
                Rzeszów
              </p>
            </div>

            <div className={`${styles.container} flex relative`}>
              <div className={styles['icon-container']}>
                <Call variant='Bold' color='#1a1a1a' />
              </div>
              <div>
                <p>504 172 071</p>
                <p>17 783 43 31</p>
              </div>
            </div>

            <div className={`${styles.container} flex relative`}>
              <div className={styles['icon-container']}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='26'
                  height='26'
                  fill='#1a1a1a'
                  viewBox='0 0 512 512'
                >
                  <path d='M424 80H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h336a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56zm-14.18 92.63l-144 112a16 16 0 01-19.64 0l-144-112a16 16 0 1119.64-25.26L256 251.73l134.18-104.36a16 16 0 0119.64 25.26z' />
                </svg>
              </div>
              <p>
                <a href='mailto:biuro@agmitransport.pl'>
                  biuro@agmitransport.pl
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className={styles['footer-box']}>
          <h3>Strony</h3>
          <div className={`${styles['box-content']} grid`}>
            <Link to='/'>Strona Główna</Link>
            <Link to='/oferta'>Oferta</Link>
            <Link to='/rekrutacja'>Kariera</Link>
            <Link to='/galeria'>Galeria</Link>
            <Link to='/kontakt'>Kontakt</Link>
          </div>
        </div>
      </div>

      <hr />

      <div className={`${styles.copyright} flex`}>
        <p>
          <Copyright size='16px' /> 2023 AGMI Transport
        </p>

        <a href='https://stronynawypasie.pl/'>
          Strony <br /> na Wypasie
        </a>
      </div>
    </div>
  );
};

export default Footer;
