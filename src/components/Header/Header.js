import background from '../../assets/AdobeStock_193619134_Preview.jpeg';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>
        Z nami <span>jesteś</span> <br /> zawsze <span> na czas </span>
      </h1>
      <img src={background} alt='' />
    </div>
  );
};

export default Header;
