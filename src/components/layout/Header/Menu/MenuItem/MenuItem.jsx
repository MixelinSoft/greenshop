import { NavLink } from 'react-router-dom';
import styles from './MenuItem.module.css';

const MenuItem = ({ item }) => {
  return (
    <NavLink
      to={item.link}
      className={({ isActive }) =>
        `${styles.menuItem} ${isActive ? styles.active : ''}`
      }
    >
      {item.name}
    </NavLink>
  );
};

export default MenuItem;
