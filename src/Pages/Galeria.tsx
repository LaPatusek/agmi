import React from 'react';
import MasonryLayout from '../components/Elements/MansoryLayout/MasonryLayout.tsx';
import styles from './Galeria.module.css';

const Galeria: React.FC = () => {
  return (
    <div className={styles.galeria}>
      <div className={`${styles['galeria-text']} center`}>
        <h1> Europa Oczami naszych kierowców</h1>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          imperdiet malesuada lacinia.
        </h2>
      </div>
      <MasonryLayout />
    </div>
  );
};

export default Galeria;
