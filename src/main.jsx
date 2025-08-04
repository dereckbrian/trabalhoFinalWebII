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
import ProtectedAdmin from './pages/ProtectedAdmin.jsx'
import AdminPage from './pages/AdminPage.jsx';
import PacotesPage from './pages/PacotesPage.jsx';
import UserList from './components/UserList.jsx'
import AdminDashboard from './components/AdminDashboard.jsx'
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
    element: <Logout/>,
  },
  {
    path: "adminPage",
    element: <ProtectedAdmin element={<AdminPage/>}/>
  },
  {
    path: "pacotes",
    element: <PacotesPage />
  },
  {
    path: "admin/users", // Nova rota para exibir a lista de usuários
    element: <ProtectedAdmin element={<UserList />} /> // Protege a página de usuários
  },
  {
    path: "admin",
    element: <ProtectedAdmin element={<AdminPage />} />,
    children: [
      {
        path: "dashboard",
        element: <AdminDashboard />, // Página do Dashboard
      },
      {
        path: "users",
        element: <UserList />, // Página de lista de usuários
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
