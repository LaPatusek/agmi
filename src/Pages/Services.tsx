import React from 'react';
import { Link } from 'react-router-dom';
import busIcon from '../assets/busicon.webp';
import oceanImg from '../assets/serwis.webp';
import Truck from '../assets/truck.webp';
import styles from './Services.module.css';

const Services: React.FC = () => {
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
            <img src={busIcon} alt='TRANSPORT KRAJOWY I SPEDYCJA' />
            <h3>TRANSPORT KRAJOWY I SPEDYCJA</h3>
            <h4>
              Realizujemy zlecenia transportowe ciężarowe pojazdami o
              ładowaności od 100 kg do 24000 kg, wspierając zarówno duże, jak i
              mniejsze przedsiębiorstwa. Oferujemy zarówno usługi całopojazdowe
              FTL, jak i drobnicowe LTL.
            </h4>
            <h5>Napisz, a wycenimy Twój transport!</h5>
            <Link to='/kontakt'>Kontakt</Link>
          </div>

          <div className={`${styles.container} grid`}>
            <img
              src={Truck}
              alt='TRANSPORT I SPEDYCJA MIĘDZYNARODOWA'
              className={styles['mid-truck']}
            />
            <h3>TRANSPORT I SPEDYCJA MIĘDZYNARODOWA</h3>
            <h4>
              Interesuje Cię transport międzynarodowy lub usługa spedycyjna.
              Skontaktuj się z nami, a my zaplanujemy i zrealizujemy ją
              posiadanym przez nas nowoczesnym taborem samochodowym. <br />
              Nasza flota to:
            </h4>
            <ol>
              <li>Plandeki o ładowności do 24 ton,</li>
              <li>zestawy chłodnicze o ładowności do 23 ton,</li>
              <li>samochody typu bus (8ep) i solo (16ep).</li>
            </ol>
            <h4>
              Organizujemy transorty całopojazdowe FTL oraz drobnicowe LTL.
            </h4>
          </div>
        </div>

        <div className={`${styles['freeze']} grid`}>
          <div className={styles['freeze-text']}>
            <h3>SERWIS SAMOCHODOWY</h3>
            <h4>
              Trans Service specjalizuje się w naprawach samochodów ciężarowych,
              osobowych oraz naczep. <br />
              Podstawowy zakres usług obejmuje:
              <ol>
                <li>naprawy główne i bieżące silników,</li>
                <li>wymianę układów rozrządu,</li>
                <li>wymianę sprzęgieł oraz skrzyni biegów,</li>
                <li>wymianę oleju,</li>
                <li>
                  diagnostykę i naprawę układów hamulcowych i kierowniczych,
                </li>
                <li>diagnostykę i naprawę instalacji elektrycznych.</li>
                <li>
                  Inne prace związane z usuwaniem bieżących usterek
                  eksploatacyjnych.
                </li>
              </ol>
              Świadczymy również usługi z zakresu sprzedaży, wymiany oraz
              wulkanizacji opon. <br /> kontakt : +48 508 153 332 <br /> e-mail
              :{' '}
              <a href='mailto:serwis@agmitransport.pl'>
                serwis@agmitransport.pl
              </a>
            </h4>
          </div>
          <div className={`${styles['image-wrap']} relative`}>
            <img src={oceanImg} alt='Serwis samochodów ciężarowych' />
            <h5 className={styles.hour}>
              Godziny otwarcia <br />
              Pon. - Pn. 8:00 - 17:00 <br /> Sobota 8:00 - 13:00
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
