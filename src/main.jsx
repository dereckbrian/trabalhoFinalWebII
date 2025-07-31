import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage.jsx'
import LoginPage from './pages/LoginPage';
import UserPage from './pages/UserPage';
import PrivateRoute from './pages/PrivateRoute.jsx';
import Logout from './components/Logout.jsx'
import ProtectedRoute from './pages/ProtectedAdmin.jsx'
import AdminPage from './pages/AdminPage.jsx';
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
    element: <PrivateRoute element={<UserPage />} /> ,
  },
  {
    path: "logout",
    element : <Logout/>,
  },
  {
path: "adminPage",
element: <ProtectedRoute element={<AdminPage/>}/>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
