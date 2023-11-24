import busIcon from '../assets/busicon.webp';
import midTruck from '../assets/midTruck.webp';
import oceanImg from '../assets/service.webp';
import Truck from '../assets/truck.webp';
import styles from './Services.module.css';

const Services = () => {
  return (
    <div className={styles['services-wrap']}>
      <div className={styles['services-header']}>
        <h1>
          Z nami jesteś <br /> zawsze na czas
        </h1>
        <h2>
          Świadczymy usługi na terenie Polski, Unii Europejskiej <br /> i poza
          jej granicami, w tym na Ukrainie i w Szwajcarii
        </h2>
      </div>

      <div className={`${styles.services}`}>
        <div className={`${styles['three-in-row']} grid`}>
          <div className={`${styles.container} grid`}>
            <img src={busIcon} alt='' />
            <h3>POJAZDY O ŁADOWNOŚCI 1.5 - 7.5 TONY</h3>
            <h4>Opis usługi, Opis usługi, Opis usługi, Opis usługi</h4>
            <ol>
              <li>
                <span>Zasięg: </span>
              </li>
              <li>
                <span>Flota:</span>
              </li>
              <li>
                <span>Ładowność:</span>
              </li>
              <li>
                <span>Dodatkowe informacje:</span>
              </li>
            </ol>
          </div>

          <div className={`${styles.container} grid`}>
            <img src={midTruck} alt='' className={styles['mid-truck']} />
            <h3>STANDARDOWYMI PLANDEKAMI O ŁADOWNOŚCI DO 24 TON</h3>
            <h4>Opis usługi, Opis usługi, Opis usługi, Opis usługi</h4>
            <ol>
              <li>
                <span>Zasięg: </span>
              </li>
              <li>
                <span>Flota:</span>
              </li>
              <li>
                <span>Ładowność:</span>
              </li>
              <li>
                <span>Dodatkowe informacje:</span>
              </li>
            </ol>
          </div>

          <div className={`${styles.container} grid`}>
            <img src={Truck} alt='' />
            <h3>POJAZDAMI CHŁODNICZYMI ORAZ IZOTERMAMI</h3>
            <h4>Opis usługi, Opis usługi, Opis usługi, Opis usługi</h4>
            <ol>
              <li>
                <span>Zasięg: </span>
              </li>
              <li>
                <span>Flota:</span>
              </li>
              <li>
                <span>Ładowność:</span>
              </li>
              <li>
                <span>Dodatkowe informacje:</span>
              </li>
            </ol>
          </div>
        </div>

        <div className={`${styles['freeze']} grid`}>
          <div className={styles['freeze-text']}>
            <h3>SERWIS SAMOCHODÓW CIĘŻAROWYCH</h3>
            <h4>
              Opis usługi, Opis usługi, Opis usługi, Opis usługi, Opis usługi,
              Opis usługi, Opis usługi, Opis usługi, Opis usługi, Opis usługi,
              Opis usługi, Opis usługi, Opis usługi, Opis usługi, Opis usługi,
              Opis usługi, Opis usługi, Opis usługi, Opis usługi, Opis usługi,
              Opis usługi, Opis usługi, Opis usługi, Opis usługi, Opis usługi
            </h4>
          </div>
          <img src={oceanImg} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Services;
