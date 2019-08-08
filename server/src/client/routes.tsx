import Index from './views/Index/Index';
import About from './views/About/About';
import ApiCall from './views/ApiCall/ApiCall';

import { Icon } from './layout/Navigation/Navigation';

export type Route = {
  path: string;
  title: string;
  icon: Icon;
  component: React.Component;
  exact: boolean;
};

export default [
  {
    path: '/',
    title: 'Homepage',
    icon: Icon.HOME,
    component: Index,
    exact: true
  },
  {
    path: '/api',
    title: 'API',
    icon: Icon.REPORT,
    component: ApiCall,
    exact: true
  },
  {
    path: '/about',
    title: 'About',
    icon: Icon.HISTORY,
    component: About,
    exact: true
  }
];
