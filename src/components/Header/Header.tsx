import React from 'react';
import backgroundPhoto from '../../assets/agmi foto 1.webp';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <div className={`${styles.header} relative`}>
      <h1>
        Z nami <span>jesteś</span> <br /> zawsze <span> na czas </span>
      </h1>
      <img src={backgroundPhoto} alt='' width={'100%'} height={'auto'} />
    </div>
  );
};

export default Header;
