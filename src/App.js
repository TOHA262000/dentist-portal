import { useContext } from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { AuthContext } from './contexts/AuthProvider/AuthProvider';
import router from './Router/Routes/Routes';

function App() {
  const {isDark}=useContext(AuthContext);
  return (
    <div data-theme={isDark?`dark`:``} className="max-w-[1400px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  );
}

export default App;
