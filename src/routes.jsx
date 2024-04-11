import App from "./App";

const routes = [
  {
    path: '/',
    element: <App page='home'/>
  },
  {
    path: 'shop',
    element: <App page='shop'/>
  }
];

export default routes;