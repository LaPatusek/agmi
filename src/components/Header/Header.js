import background from '../../assets/AdobeStock_193619134_Preview.jpeg';
import logo from '../../assets/logov3.png';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={`${styles.header} relative`}>
      <div className={styles.logo}>
        <img src={logo} alt='' />
      </div>
      <h1>
        Z nami <span>jesteś</span> <br /> zawsze <span> na czas </span>
      </h1>
      <div className={styles['background-image']}>
        <img src={background} alt='' />
      </div>
    </div>
  );
};

export default Header;
