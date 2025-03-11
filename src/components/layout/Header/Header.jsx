import styles from './Header.module.css';
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import UserActions from './UserActions/UserActions';

const Header = (props) => {
  return (
    <header className={`${styles.headerContainer} container`}>
      <div className={styles.header}>
        <Logo />
        <Menu />
        <UserActions />
      </div>
    </header>
  );
};

export default Header;
