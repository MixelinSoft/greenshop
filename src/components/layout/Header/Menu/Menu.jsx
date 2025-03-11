import { menu } from '../../../../data/menu';
import MenuItem from './MenuItem/MenuItem';
import styles from './Menu.module.css';

const Menu = () => {
  return (
    <div className={styles.menu}>
      {menu.map((item) => (
        <div key={item.id} className={styles.menuItem}>
          <MenuItem item={item} />
        </div>
      ))}
    </div>
  );
};

export default Menu;
