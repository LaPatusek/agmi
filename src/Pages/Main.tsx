import { ArrowRight2, TruckFast } from 'iconsax-react';
import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import busPhoto from '../assets/agmi foto 2.webp';
import test from '../assets/newphoto.webp';
import flota from '../assets/noun-truck.webp';
import quality from '../assets/ribbon.svg';
import serviceImage from '../assets/serwis.webp';
import shield from '../assets/shield-checkmark.svg';
import Blog from '../components/Blog/Blog.tsx';
import { QUERY_POSTS, graphcms } from '../components/Graphql/Queries';
import Header from '../components/Header/Header.tsx';
import styles from './Main.module.css';

interface Article {
  id: number;
  slug: string;
  title: string;
  description: string;
  createdAt: number;
  photo: {
    url: string;
  };
  content: {
    html: string;
  };
}

interface ApiResponse {
  posts: Article[];
}

const Main: React.FC = () => {
  const [posts, setPosts] = useState<Article[]>([]);

  useEffect(() => {
    graphcms
      .request<ApiResponse>(QUERY_POSTS)
      .then((res) => setPosts(res.posts));
  }, []);

  return (
    <Fragment>
      <Header />
      <div className={styles.oferta}>
        <h2>Sprawdź naszą ofertę</h2>

        <div className={`${styles['first-row']} grid`}>
          <div className={`${styles.container} relative`}>
            <img
              src={test}
              alt='TRANSPORT MIĘDZYNARODOWY I SPEDYCJA'
              width={'100%'}
              height={'650px'}
            />
            <div className={`${styles['container-text']} `}>
              <h3>
                TRANSPORT MIĘDZYNARODOWY <br /> I SPEDYCJA
              </h3>
              <Link to='/oferta'>
                Więcej informacji <ArrowRight2 size={'18'} />
              </Link>
            </div>
          </div>
          <div className={`${styles.container} relative`}>
            <img
              src={busPhoto}
              alt='TRANSPORT KRAJOWY I SPEDYCJA'
              width={'100%'}
              height={'650px'}
            />
            <div className={`${styles['container-text']}`}>
              <h3>
                TRANSPORT KRAJOWY <br /> I SPEDYCJA
              </h3>
              <Link to='/oferta'>
                Więcej informacji <ArrowRight2 size={'18'} />
              </Link>
            </div>
          </div>
          <div className={`${styles.container} relative`}>
            <img
              src={serviceImage}
              alt='SERWIS SAMOCHODOWY'
              width={'100%'}
              height={'650px'}
              className={styles['service-image']}
            />
            <div className={`${styles['container-text']}`}>
              <h3>SERWIS SAMOCHODOWY</h3>

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
          Firma AGMI Transport rozpoczęła działalność w sektorze usług
          transportowych w roku 2002. <br />
          Specjalizujemy się w usługach w zakresie przewozów krajowych i
          mię&shy;dzy&shy;narodowych. <br /> To, co nas wyróżnia to konkurencyjne ceny
          przy zachowaniu wysokiej jakości świadczonych usług oraz kompleksowa
          obsługa klientów. Priorytetem naszego działania jest terminowość
          dostaw. <br /> Przez lata obecności na rynku zdobyliśmy cenne
          doświadczenie i wy&shy;praco&shy;waliśmy procedury zapewniające profesjonalną
          obsługę naszych kontrahentów. Od wielu lat jesteśmy partnerem dla
          takich firm jak JAS-FBG S.A. oraz RABEN Logistics. <br />
          Dzięki wykwalifikowanej kadrze pracowniczej jesteśmy rzetelnym i
          odpo&shy;wiedzialnym partnerem na rynku usług spedycyjnych i
          tran&shy;sportowych. <br />
          <span> Zapraszamy do współpracy!</span>
        </h3>
        <div className={`${styles['zalety-wrap']} grid`}>
          <div className={`${styles.zaleta} center`}>
            <TruckFast variant='Bold' size={'64'} />
            <h4>
              Szybkość <br /> działania
            </h4>
          </div>
          <div className={`${styles.zaleta} center`}>
            <img src={flota} alt='Flota' height={64} width={64} />
            <h4>Flota</h4>
          </div>
          <div className={`${styles.zaleta} center`}>
            <img src={shield} alt='Rzetelność' height={64} width={64} />
            <h4>Rzetelność</h4>
          </div>
          <div className={`${styles.zaleta} center`}>
            <img
              src={quality}
              alt='Wysoka jakość obsługi'
              height={64}
              width={64}
            />
            <h4>Wysoka jakość obsługi</h4>
          </div>
        </div>
        <div className={`${styles['buttons-wrap']} center`}>
          <Link to='/rekrutacja'>Dołącz do naszego zespołu</Link>

          <Link to='/kontakt'>Skontakuj się z nami</Link>
        </div>
      </div>

      <Blog posts={posts} />
    </Fragment>
  );
};

export default Main;
