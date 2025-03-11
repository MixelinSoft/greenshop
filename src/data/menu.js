import Blogs from '../components/pages/Blogs/Blogs';
import Home from '../components/pages/Home/Home';
import PlantCare from '../components/pages/PlantCare/PlantCare';
import Shop from '../components/pages/Shop/Shop';

export const menu = [
  { id: 1, name: 'Home', link: '/', component: Home },
  { id: 2, name: 'Shop', link: '/shop', component: Shop },
  { id: 3, name: 'Plant Care', link: '/plantcare', component: PlantCare },
  { id: 4, name: 'Blogs', link: '/blogs', component: Blogs },
];
