import styles from './UserActions.module.css';
import searchIcon from '../../../../assets/icons/search.svg';
import cartIcon from '../../../../assets/icons/cart.svg';
import loginIcon from '../../../../assets/icons/login.svg';

const UserActions = () => {
  return (
    <div className={styles.userActions}>
      <button className={styles.userActionsButton}>
        <img src={searchIcon} alt='Search Icon' />
      </button>
      <button className={styles.userActionsButton}>
        <img src={cartIcon} alt='Cart Icon' />
      </button>
      <button className={styles.loginButton}>
        <img src={loginIcon} alt='Login Icon' />
        <div>Login</div>
      </button>
    </div>
  );
};

export default UserActions;
