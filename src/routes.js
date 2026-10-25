// src/routes.js
import Home from './pages/Home';
import Malware from './pages/Malware';
import Speed from './pages/Speed';

export const routes = [
  { path: '/', component: Home },
  { path: '/eliminacion-malware', component: Malware },
  { path: '/optimizacion-velocidad', component: Speed }
];
