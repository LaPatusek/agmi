import React from 'react';
import backgroundPhoto from '../../assets/agmi foto 1.webp';
import logo from '../../assets/logov3.webp';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <div className={`${styles.header} relative`}>
      <div className={styles.logo}>
        <img src={logo} alt='' />
      </div>
      <h1>
        Z nami <span>jesteś</span> <br /> zawsze <span> na czas </span>
      </h1>
      <div className={styles['background-image']}>
        <img src={backgroundPhoto} alt='' width={'100%'} height={'auto'} />
      </div>
    </div>
  );
};

export default Header;
