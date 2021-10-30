import Home from '../pages/Home';
import ArtDetail from '../pages/ArtDetail';

const routes = [
  {
    name: 'Home',
    component: Home,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'ArtDetail',
    component: ArtDetail,
    options: {
      headerShown: false,
    },
  },
];

export default routes;
