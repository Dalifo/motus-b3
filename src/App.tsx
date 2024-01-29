import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from 'src/config/router.tsx';

const App = () => (
  <RouterProvider router={router} />
);

export default App;
