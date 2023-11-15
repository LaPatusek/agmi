import MasonryLayout from '../components/Elements/MansoryLayout/MasonryLayout';
import styles from './Galeria.module.css';

const Galeria = () => {
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
