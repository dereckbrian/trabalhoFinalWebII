import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage.jsx'
import LoginPage from './pages/LoginPage';
import UserPage from './pages/UserPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "register",
    element: <RegisterPage />,
  },
  {
    path: "logar",
    element: <LoginPage />,
  },
  {
    path: "userPage",
    element: <UserPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
