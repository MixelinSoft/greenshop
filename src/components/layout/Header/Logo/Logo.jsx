import logoImage from '../../../../assets/images/logo.png';
import styles from './Logo.module.css';

const Logo = (props) => {
  return (
    <div className={styles.logoContainer}>
      <img className={styles.logo} src={logoImage} alt='Logo' />
    </div>
  );
};

export default Logo;
