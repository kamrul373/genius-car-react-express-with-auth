import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/router/routes';

function App() {
  return (
    <div className='max-w-7xl mx-auto data-theme="cupcake"'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
