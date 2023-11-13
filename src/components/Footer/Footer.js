import { Call, Copyright, Facebook, Instagram, Location } from 'iconsax-react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.socials}>
        <h2>Obserwuj nas na bieżąco</h2>
        <div>
          <a
            href='https://www.facebook.com/'
            target='_blank'
            rel='noreferrer'
            className={styles.Facebook}
            aria-label='FaceBook'
          >
            <Facebook size='24' variant='Bold' />
          </a>
          <a
            href='https://www.linkedin.com/'
            target='_blank'
            rel='noreferrer'
            className={styles.Linkedin}
            aria-label='Linkedin'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24px'
              height='24px'
              viewBox='0 0 512 512'
            >
              <path d='M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z' />
            </svg>
          </a>
          <a
            href='https://www.instagram.com/'
            target='_blank'
            rel='noreferrer'
            className={styles.Instagram}
            aria-label='Instagram'
          >
            <Instagram variant='Bold' size='24' />
          </a>
        </div>
      </div>

      <hr />

      <div className={`${styles['boxes-wrap']} grid`}>
        <div className={styles['footer-box']}>
          <h3>Kontakt</h3>
          <div className={`${styles['box-content']} grid`}>
            <div className={styles.container}>
              <div className={styles['icon-container']}>
                <Location variant='Bold' color='#1a1a1a' />
              </div>
              <p>
                AGMI Transport <br /> ul hr. Wandy Tarnowskiej 1 <br /> 35-322
                Rzeszów
              </p>
            </div>

            <div className={styles.container}>
              <div className={styles['icon-container']}>
                <Call variant='Bold' color='#1a1a1a' />
              </div>
              <p>
                tel. 17 783 43 31 <br /> fax. 17 783 43 11
              </p>
            </div>

            <div className={styles.container}>
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
              <p>biuro@agmitransport.pl</p>
            </div>
          </div>
        </div>

        <div className={styles['footer-box']}>
          <h3>Strony</h3>
          <div className={`${styles['box-content']} grid`}>
            <Link to='/'>Strona Główna</Link>
            <Link to='/oferta'>Oferta</Link>
            <Link to='/galeria'>Galeria</Link>
            <Link to='/kontakt'>Kontakt</Link>
          </div>
        </div>
      </div>

      <hr />

      <div className={styles.copyright}>
        <p>
          <Copyright size='16px' /> 2014 AGMI Transport
        </p>

        <Link to='/polityka-prywatnosci'>Polityka Prywatności</Link>
      </div>
    </div>
  );
};

export default Footer;
