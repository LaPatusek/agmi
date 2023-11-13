import { ArrowRight2, TruckFast } from 'iconsax-react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import temporaryImage from '../assets/bus.jpeg';
import Header from '../components/Header/Header';
import styles from './Main.module.css';

const Main = () => {
  return (
    <Fragment>
      <Header />
      <div className={styles.oferta}>
        <h2>Sprawdź naszą ofertę</h2>

        <div className={`${styles['first-row']} grid`}>
          <div className={styles.container}>
            <img src={temporaryImage} alt='' />
            <div className={styles['container-text']}>
              <h3>Bus o ładowności 1.5 - 3.5 tony</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Link to='/oferta'>
                Więcej informacji <ArrowRight2 size={'18'} />
              </Link>
            </div>
          </div>
          <div className={styles.container}>
            <img src={temporaryImage} alt='' />
            <div className={styles['container-text']}>
              <h3>Standardowymi plandekami o ładowności do 24 ton</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Link to='/oferta'>
                Więcej informacji <ArrowRight2 size={'18'} />
              </Link>
            </div>
          </div>
          <div className={styles.container}>
            <img src={temporaryImage} alt='' />
            <div className={styles['container-text']}>
              <h3>Pojazdami typu zestaw o długości 15,4m.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Link to='/oferta'>
                Więcej informacji <ArrowRight2 size={'18'} />
              </Link>
            </div>
          </div>
        </div>
        <div className={`${styles['second-row']} grid`}>
          <div className={styles.container}>
            <img src={temporaryImage} alt='' />
            <div className={styles['container-text']}>
              <h3>Pojazdami chłodniczymi oraz izotermami</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Link to='/oferta'>
                Więcej informacji <ArrowRight2 size={'18'} />
              </Link>
            </div>
          </div>
          <div className={styles.container}>
            <img src={temporaryImage} alt='' />
            <div className={styles['container-text']}>
              <h3>Transport kontenerów morskich</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Link to='/oferta'>
                Więcej informacji <ArrowRight2 size={'18'} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['about-us']}>
        <h2>O nas</h2>
        <h3>
          Jesteśmy dynamicznie rozwijającą się firmą działającą w branży usług
          TSL (Transport - Spedycja - Logistyka). <br /> Dzięki wykwalifikowanej
          kadrze pracowniczej jesteśmy rzetelnym i odpowiedzialnym partnerem na
          rynku usług spedycyjnych i transportowych.
        </h3>
        <div className={`${styles['zalety-wrap']} grid`}>
          <div className={styles.zaleta}>
            <TruckFast variant='Bold' color='#333333' size={'64'} />
            <h4>Szybkość <br/> działania</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className={styles.zaleta}>
            <TruckFast variant='Bold' color='#333333' size={'64'} />
            <h4>Flota</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className={styles.zaleta}>
            <TruckFast variant='Bold' color='#333333' size={'64'} />
            <h4>Rzetelność</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className={styles.zaleta}>
            <TruckFast variant='Bold' color='#333333' size={'64'} />
            <h4>Wysoka jakość obsługi</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className={styles['buttons-wrap']}>
          <Link to='/rekrutacja'>Dołącz do naszego zespołu</Link>

          <Link to='/kontakt'>Skontakuj się z nami</Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
