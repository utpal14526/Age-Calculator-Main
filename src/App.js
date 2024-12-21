import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Body from './Components/Body/Body';
import About from './Components/About/About';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';
import Footer from './Components/Footer/Footer';

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Body /> },
        { path: 'about', element: <About /> },
        { path: 'privacy-policy', element: <PrivacyPolicy /> },

      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
